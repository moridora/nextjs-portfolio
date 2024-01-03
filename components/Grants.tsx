// pages/Grants.tsx
import React from 'react';
import { MyContainer } from './MyContainer';
import { useTranslation } from 'react-i18next';

export function Grants() {
  const { t } = useTranslation();
  const sections = [
    {
      sectionTitle: '',
      items: [
        {
          title: t("scholarships.items.1.title"),
          subheader: t("scholarships.items.1.subheader"),
          description: t("scholarships.items.1.description"),
        },
      ],
    },
  ];

  return <MyContainer title={t('scholarships.title')} sections={sections} backgroundColor="linear-gradient(135deg, #764ba2, #709b02)" />;
}

