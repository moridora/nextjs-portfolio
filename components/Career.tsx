// components/Career.tsx
import React from 'react';
import { MyContainer } from './MyContainer';
import { useTranslation } from 'react-i18next';

export function Career() {
  const { t } = useTranslation();

  const sections = [
    {
      sectionTitle: t("career.education.sectiontitle"),
      items: [
        {
          title: (
            <>
              {t("career.education.items.master.school")}
              <br />
              {t("career.education.items.master.degree")}
            </>
          ),
          subheader: t("career.education.items.master.subheader"),
          description: '',
        },
        {
          title: (
            <>
              {t("career.education.items.bachelor.school")}
              <br />
              {t("career.education.items.bachelor.degree")}
            </>
          ),
          subheader: t("career.education.items.bachelor.subheader"),
          description: '',
        },
        {
          title: (
            <>
              {t("career.education.items.foundation.school")}
              <br />
              {t("career.education.items.foundation.degree")}
            </>
          ),
          subheader: t("career.education.items.foundation.subheader"),
          description: '',
        },
      ],
    },
    {
      sectionTitle: t("career.work.sectiontitle"),
      items: [
        {
          title: (
            <>
              {t("career.work.items.recruit.company")}
              <br />
              {t("career.work.items.recruit.type")}
            </>
          ),
          subheader: t("career.work.items.recruit.subheader"),
          description: '',
        },
        {
          title: (
            <>
              {t("career.work.items.muto.company")}
              <br />
              {t("career.work.items.muto.type")}
            </>
          ),
          subheader: t("career.work.items.muto.subheader"),
          description: '',
        },
      ],
    },
  ];

  return <MyContainer title={t('career.title')} sections={sections} backgroundColor="linear-gradient(135deg, #764ba2, #82a0e8)" />;
}