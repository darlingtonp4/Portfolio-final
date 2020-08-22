import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ContactInfo from 'components/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Layout>
        <SEO title="Contact" />
        <ContactInfo />
      </Layout>
    </div>
  );
};

export default ContactPage;
