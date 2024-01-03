// pages/Intoduction.tsx
import React from 'react';
import Image from 'next/image';
import { MyContainer } from './MyContainer';
import { useTranslation } from 'react-i18next';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import Link from 'next/link';
import Button from '@mui/material/Button';
import MeIcon from '../public/assets/me.png'; // 画像のパスに置き換える
export function Profile() {
  const { t } = useTranslation();

  const sections = [
    {
      sectionTitle: '',
      items: [
        {
          title: t("profile.items.name.title"),
          subheader: '',
          description: t("profile.items.name.description"),
        },
        {
          title: t("profile.items.aboutme.title"),
          subheader: '',
          description: t("profile.items.aboutme.description"),
        },
        {
          title: t("profile.items.interests.title"),
          subheader: '',
          description: t("profile.items.interests.description"),
        },
        {
          title: t("profile.items.contact.title"),
          subheader: '',
          description: (
            <>
              <Link href="mailto:smori@iplab.cs.tsukuba.ac.jp" target="_blank" passHref>
                <Button
                  color="inherit"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #cc7bffee, #3300c177)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #007bff77, #3300c177)', // ホバー時の背景色
                    },
                    color: '#fff',
                  }}
                >
                  <MailIcon />
                </Button>
              </Link>
              <Typography
                component="div"
              >
                {t("profile.items.contact.description")}
              </Typography>
            </>
          )
        },
      ],
    },
  ];

  return (
    <MyContainer title={t('profile.title')} sections={sections} backgroundColor="linear-gradient(135deg, #667eea, #764ba2)">
      {/* Imageコンポーネント修正 */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '50%',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)', // 影の追加
          background: "#ffffffdd"
        }}
      >
        <Image
          src={MeIcon}
          alt="Shintaro Mori"
          width={500}
          height={500}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>
    </MyContainer>
  );
}
