// LanguageSwitcher.tsx
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps { }

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (event: SelectChangeEvent<string>) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    router.push(router.pathname, router.asPath, { locale: newLang });
  };

  return (
    <Select
      label="Language"
      value={i18n.language}
      onChange={changeLanguage}
      sx={{ color: 'white', '&:before': { borderColor: 'white' } }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="ja">日本語</MenuItem>
    </Select>
  );
};
