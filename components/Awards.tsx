// pages/awards.tsx
import React from 'react';
import { MyContainer } from './MyContainer';
import { useTranslation } from 'react-i18next';

export function Awards() {
  const { t } = useTranslation();

  const sections = [
    {
      sectionTitle: '',
      items: [
        {
          title: t("awards.items.1.title"),
          subheader: t("awards.items.1.subheader"),
          description: t("awards.items.1.description"),
        },
        {
          title: t("awards.items.2.title"),
          subheader: t("awards.items.2.subheader"),
          description: t("awards.items.2.description"),
        },
      ],
    },
  ];

  return <MyContainer title={t('awards.title')} sections={sections} backgroundColor="linear-gradient(135deg, #26c6da, #764ba2)" />;
}

