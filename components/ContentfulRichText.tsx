import {
  Document as RichTextDocument,
  Block,
  Inline,
} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";

import ContentfulImage from "./ContentfulImage";

type RichTextProps = { content: RichTextDocument | null };
type RichTextAssetProps = { asset: any };

const RichTextAsset = ({ asset }: RichTextAssetProps) => {
  if (asset?.file?.url) {
    return (
      <ContentfulImage
        src={`https:${asset?.file?.url}`}
        alt={asset.description}
        style={{ width: "100%", height: "auto" }}
        width={300}
        height={300}
      />
    );
  }

  return null;
};

const renderMarkdownOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => (
      <RichTextAsset asset={node.data.target.fields} />
    ),
  },
};

const RichText = ({ content }: RichTextProps) => {
  if (!content) {
    return null;
  }

  return (
    <div className={markdownStyles["markdown"]}>
      {documentToReactComponents(content, renderMarkdownOptions)}
    </div>
  );
};

export default RichText;
