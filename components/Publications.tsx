// components/Publications.tsx
import React from 'react';
import { MyContainer } from './MyContainer';

export function Publications() {
  const sections = [
    {
      sectionTitle: 'Journal',
      items: [
        {
          title: '物理的提示とAR提示を併用するハイブリッド型ロボットにおける頭部と腕部の提示方法の違いによる影響',
          subheader: '2024',
          description: (
            <>
              Ikkaku Kawaguchi, Keiichi Ihara, Ayumi Ichikawa, Aoi Sakata, <b>Shintaro Mori</b>.
              <br />
              "物理的提示とAR提示を併用するハイブリッド型ロボットにおける頭部と腕部の提示方法の違いによる影響", IPSJ Journal, vol.65, No.3, 2024, IPSJ.(To appear)
            </>
          ),
        },
        // Add more journal items as needed
      ],
    },
    {
      sectionTitle: 'Full Paper',
      items: [
        {
          title: 'ARハンドとEMSによる手指の同期を用いた遠隔でのピアノ演奏指導',
          subheader: 'November 2023',
          description: (
            <>
              <b>Shintaro Mori</b>, Keiichi Ihara, Ikkaku Kawaguchi.
              <br />
              "ARハンドとEMSによる手指の同期を用いた遠隔でのピアノ演奏指導",  31th Workshop on Interactive Systems and Software (WISS 2023)
              , November, 2023, JSSST, pp. 41-47.
            </>
          ),
        },
        // Add more workshop/poster items as needed
      ],
    },
    {
      sectionTitle: 'Short Paper',
      items: [
        {
          title: 'サロゲートプレゼンテーションにおける音声提示手法の検証',
          subheader: 'March 2022',
          description: (
            <>
              <b>Shintaro Mori</b>, Ryosuke Takada.
              <br />
              "サロゲートプレゼンテーションにおける音声提示手法の検証", Proceedings of the 84th National Convention of IPSJ, March, 2022, IPSJ.
            </>
          ),
        },
        {
          title: (
            <>
              サロゲートプレゼンテーションにおける音声提示手法の検証
              <br />
              (Paper Presentation Award)
            </>
          ),
          subheader: 'March 2022',
          description: (
            <>
              <b>Shintaro Mori</b>, Ryosuke Takada.
              <br />
              "サロゲートプレゼンテーションにおける音声提示手法の検証", Proceedings of the College of Technology Graduation Research Presentation for the Reiwa 3 Academic Year, March, 2022, IEEJ Kansai Branch.
            </>
          ),
        },
        // Add more short paper items as needed
      ],
    },
  ];

  return <MyContainer title="Publications" sections={sections} backgroundColor="linear-gradient(135deg, #26c6da, #00acc1)" />;
}
