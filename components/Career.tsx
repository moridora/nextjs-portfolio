// components/Career.tsx
import React from 'react';
import { MyContainer } from './MyContainer';

export function Career() {
  const sections = [
    {
      sectionTitle: 'Education',
      items: [
        {
          title: (
            <>
              University of Tsukuba
              <br />
              Bachelor of Science in Media Sciences and Engineering
            </>
          ),
          subheader: 'April 2022 - Present',
          description: '',
        },
        {
          title: (
            <>
              Kobe City College of Technology
              <br />
              Foundation of Engineering
            </>
          ),
          subheader: 'April 2017 - March 2022',
          description: '',
        },
      ],
    },
    {
      sectionTitle: 'Work Experience',
      items: [
        {
          title: (
            <>
              Recruit Co., Ltd.
              <br />
              Part-Time Contract Worker at the Ring bureau
            </>
          ),
          subheader: 'May 2022 - Present',
          description: '',
        },
        {
          title: (
            <>
              Muto Computer Technology LLC.
              <br />
              Part-Time Worker
            </>
          ),
          subheader: 'May 2022 - Present',
          description: '',
        },
      ],
    },
  ];

  return <MyContainer title="Career" sections={sections} backgroundColor="linear-gradient(135deg, #764ba2, #82a0e8)" />;
}