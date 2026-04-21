type Props = {
  data: Record<string, unknown>;
};

const JsonLd = ({ data }: Props) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

export default JsonLd;
