import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import { APIPage } from "@/components/api-page";
import { CodeFromSource } from "@/components/code-from-source";
import { assetPath } from "@/lib/base-path";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    APIPage,
    CodeFromSource,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    img: ({ src, ...props }: ComponentPropsWithoutRef<"img">) => {
      return (
        <ImageZoom
          {...props}
          src={typeof src === "string" ? assetPath(src) : undefined}
        />
      );
    },
    ...components,
  };
}
