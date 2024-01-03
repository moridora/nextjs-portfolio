// components/Publications.tsx
import React from 'react';
import { MyContainer } from './MyContainer';
import { useTranslation } from 'react-i18next';
import PDFIcon from '@mui/icons-material/PictureAsPdf';
import MovieIcon from '@mui/icons-material/Movie';
import { IconButton } from './IconButton';

export function Publications() {
  const { t } = useTranslation();

  const sections = [
    {
      sectionTitle: t('publicaitons.jounal'),
      items: [
        {
          title: t('publicaitons.papers.4.title'),
          subheader: t('publicaitons.papers.4.month') + " " + t('publicaitons.papers.4.year'),
          description: (
            <>
              {t('publicaitons.papers.4.authors')}.
              <br />
              &quot;{t('publicaitons.papers.4.title')}&quot;, {t('publicaitons.papers.4.booktitle')}, vol.{t('publicaitons.papers.4.vol')}, No.{t('publicaitons.papers.4.no')}, {t('publicaitons.papers.4.year')}, {t('publicaitons.papers.4.publisher')}.(To appear)
            </>
          ),
        },
        // Add more journal items as needed
      ],
    },
    {
      sectionTitle: t('publicaitons.fullpaper'),
      items: [
        {
          title: t('publicaitons.papers.3.title'),
          subheader: t('publicaitons.papers.3.month') + " " + t('publicaitons.papers.3.year'),
          description: (
            <>
              {t('publicaitons.papers.3.authors')}.
              <br />
              &quot;{t('publicaitons.papers.3.title')}&quot;, {t('publicaitons.papers.3.booktitle')}, {t('publicaitons.papers.3.month')}, {t('publicaitons.papers.3.year')}, {t('publicaitons.papers.3.publisher')}, pp. {t('publicaitons.papers.3.pages')}.
              &nbsp;
              <IconButton
                to="https://www.wiss.org/WISS2023Proceedings/data/06.pdf"
                icon={<PDFIcon />}
                text="PDF"
                backgroundColor="linear-gradient(135deg, #FF0000, #FF00c1)"
                textColor=""
              />
              &nbsp;
              <IconButton
                to="https://www.wiss.org/WISS2023Proceedings/data/06.mp4"
                icon={<MovieIcon />}
                text="Video"
                backgroundColor="linear-gradient(135deg, #000000ee, #00000099)"
                textColor=""
              />
            </>
          ),
        },
        // Add more workshop/poster items as needed
      ],
    },
    {
      sectionTitle: t('publicaitons.shortpaper'),
      items: [
        {
          title: t('publicaitons.papers.2.title'),
          subheader: t('publicaitons.papers.2.month') + " " + t('publicaitons.papers.2.year'),
          description: (
            <>
              {t('publicaitons.papers.2.authors')}.
              <br />
              &quot;{t('publicaitons.papers.2.title')}&quot;, {t('publicaitons.papers.2.booktitle')}, {t('publicaitons.papers.2.month')}, {t('publicaitons.papers.2.year')}, {t('publicaitons.papers.2.publisher')}.
              &nbsp;
              <IconButton
                to="https://ipsj.ixsq.nii.ac.jp/ej/?action=repository_action_common_download&item_id=221535&item_no=1&attribute_id=1&file_no=1"
                icon={<PDFIcon />}
                text="PDF"
                backgroundColor="linear-gradient(135deg, #FF0000, #FF00c1)"
                textColor=""
              />
            </>
          ),
        },
        {
          title: t('publicaitons.papers.1.title'),
          subheader: t('publicaitons.papers.1.month') + " " + t('publicaitons.papers.1.year'),
          description: (
            <>
              {t('publicaitons.papers.1.authors')}.
              <br />
              &quot;{t('publicaitons.papers.1.title')}&quot;, {t('publicaitons.papers.1.booktitle')}, {t('publicaitons.papers.1.month')}, {t('publicaitons.papers.1.year')}, {t('publicaitons.papers.1.publisher')}.
            </>
          ),
        },
        // Add more short paper items as needed
      ],
    },
  ];

  return <MyContainer title={t('publicaitons.title')} sections={sections} backgroundColor="linear-gradient(135deg, #26c6da, #00acc1)" />;
}
