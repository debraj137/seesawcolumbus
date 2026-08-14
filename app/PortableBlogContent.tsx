"use client";

import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";

type PortableBlogContentProps = {
  value: any[];
};

/**
 * Sanity body data in this project can contain wrapper objects
 * around the actual Portable Text blocks.
 *
 * This converts all supported shapes into the normal Portable
 * Text array expected by <PortableText />.
 */
function normalizePortableText(value: any[]): any[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const result: any[] = [];

  function addItem(item: any) {
    if (!item) {
      return;
    }

    // Normal Portable Text block
    if (
      typeof item === "object" &&
      (
        item._type === "block" ||
        item._type === "image" ||
        item._type === "table"
      )
    ) {
      result.push(item);
      return;
    }

    // Wrapper containing another value
    if (
      typeof item === "object" &&
      "value" in item
    ) {
      const inner = item.value;

      if (Array.isArray(inner)) {
        inner.forEach(addItem);
      } else {
        addItem(inner);
      }

      return;
    }

    // If something unexpected comes through,
    // don't pass it to React as a child.
  }

  value.forEach(addItem);

  return result;
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p>{children}</p>
    ),

    h1: ({ children }) => (
      <h1>{children}</h1>
    ),

    h2: ({ children }) => (
      <h2>{children}</h2>
    ),

    h3: ({ children }) => (
      <h3>{children}</h3>
    ),

    h4: ({ children }) => (
      <h4>{children}</h4>
    ),

    blockquote: ({ children }) => (
      <blockquote>
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul>{children}</ul>
    ),

    number: ({ children }) => (
      <ol>{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li>{children}</li>
    ),

    number: ({ children }) => (
      <li>{children}</li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong>{children}</strong>
    ),

    em: ({ children }) => (
      <em>{children}</em>
    ),

    underline: ({ children }) => (
      <u>{children}</u>
    ),

    link: ({ children, value }) => {
      const href = value?.href || "#";

      const external =
        href.startsWith("http://") ||
        href.startsWith("https://");

      return (
        <a
          href={href}
          target={
            external ? "_blank" : undefined
          }
          rel={
            external
              ? "noopener noreferrer"
              : undefined
          }
        >
          {children}
        </a>
      );
    },
  },

  types: {
    image: ({ value }) => {
      const imageUrl =
        value?.assetUrl ||
        value?.asset?.url;

      if (!imageUrl) {
        return null;
      }

      return (
        <figure className="blog-inline-image">
          <img
            src={imageUrl}
            alt={value?.alt || ""}
            loading="lazy"
          />

          {value?.caption && (
            <figcaption>
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

table: ({ value }) => {
  if (!value?.rows) {
    return null;
  }

  // Extract plain text from a Sanity table cell.
  const getCellText = (cell: any): string => {
    if (!cell) {
      return "";
    }

    // The Sanity table cell contains:
    // cell.value -> array of Portable Text blocks
    if (Array.isArray(cell.value)) {
      return cell.value
        .map((block: any) => {
          if (!block?.children) {
            return "";
          }

          return block.children
            .map((child: any) => child?.text || "")
            .join("");
        })
        .join("\n");
    }

    if (typeof cell.value === "string") {
      return cell.value;
    }

    return "";
  };

  return (
    <div className="blog-table-wrapper">
      <table className="blog-table">
        <tbody>
          {value.rows.map(
            (row: any, rowIndex: number) => {
              const cells = row.cells || [];

              return (
                <tr
                  key={
                    row._key ||
                    `row-${rowIndex}`
                  }
                >
                  {cells.map(
                    (
                      cell: any,
                      cellIndex: number
                    ) => {
                      const text =
                        getCellText(cell);

                      const isHeader =
                        rowIndex <
                        (value.headerRows || 0);

                      const CellTag = isHeader
                        ? "th"
                        : "td";

                      return (
                        <CellTag
                          key={
                            cell._key ||
                            `${rowIndex}-${cellIndex}`
                          }
                        >
                          {text}
                        </CellTag>
                      );
                    }
                  )}
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
},
  },
};

export default function PortableBlogContent({
  value,
}: PortableBlogContentProps) {
  const normalizedValue =
    normalizePortableText(value);

  if (normalizedValue.length === 0) {
    return null;
  }

  return (
    <PortableText
      value={normalizedValue}
      components={components}
    />
  );
}