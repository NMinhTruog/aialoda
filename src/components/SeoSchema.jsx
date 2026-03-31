import React from 'react';
import { Helmet } from 'react-helmet';

const SeoSchema = ({ schemas = [] }) => (
  <Helmet>
    {schemas.filter(Boolean).map((schema, index) => (
      <script key={index} type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    ))}
  </Helmet>
);

export default SeoSchema;
