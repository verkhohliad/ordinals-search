import { FC } from "react";

interface InscriptionContentProps {
  contentType: string;
  contentUrl: string;
}

export const InscriptionContent: FC<InscriptionContentProps> = ({
  contentType,
  contentUrl,
}) => {
  // Handle image content types
  if (contentType.startsWith("image/")) {
    return (
      <div className="flex justify-center">
        <img
          alt="Inscription content"
          className="max-w-full h-auto rounded-lg"
          loading="lazy"
          src={contentUrl}
        />
      </div>
    );
  }

  // Handle text content types
  if (contentType.startsWith("text/") || contentType === "application/json") {
    return (
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-gray-100 text-sm">
          <code>{contentUrl}</code>
        </pre>
      </div>
    );
  }

  // Default fallback for unsupported content types
  return (
    <div className="text-center py-4">
      <p>Content type {contentType} is not supported for preview.</p>
      <a
        className="text-blue-500 hover:text-blue-600 mt-2 inline-block"
        href={contentUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        View content directly
      </a>
    </div>
  );
};
