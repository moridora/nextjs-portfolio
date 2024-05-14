import React from 'react';

interface CVProps {
  data: {
    profile: {
      title: string;
      items: {
        [key: string]: {
          title: string;
          subheader?: string;
          description: string;
        };
      };
    };
    publicaitons: {
      title: string;
      jounal: string;
      fullpaper: string;
      shortpaper: string;
      papers: {
        [key: string]: {
          title: string;
          authors: string;
          booktitle: string;
          month: string;
          year: string;
          publisher: string;
          pages?: string;
          vol?: string;
          no?: string;
        };
      };
    };
    career: {
      title: string;
      education: {
        sectiontitle: string;
        items: {
          [key: string]: {
            school: string;
            degree: string;
            subheader: string;
            description: string;
          };
        };
      };
      work: {
        sectiontitle: string;
        items: {
          [key: string]: {
            company: string;
            type: string;
            subheader: string;
            description: string;
          };
        };
      };
    };
    awards: {
      title: string;
      items: {
        [key: string]: {
          title: string;
          subheader: string;
          description: string;
        };
      };
    };
    scholarships: {
      title: string;
      items: {
        [key: string]: {
          title: string;
          subheader: string;
          description: string;
        };
      };
    };
  };
}

export function MyCV({ data }: CVProps) {
  const renderSection = (sectionData: any, sectionTitle: string) => {
    return (
      <div>
        <h2>{sectionTitle}</h2>
        {Object.entries(sectionData?.items || {}).map(([key, item]: any) => (
          <div key={key}>
            <h3>{item.title}</h3>
            {Object.entries(item).map(([subKey, subItem]: any) => (
              <div key={subKey}>
                {subItem && subKey !== 'title' && subKey !== 'subheader' && (
                  <>
                    <strong>{subItem.title || subKey}: </strong>
                    {subItem.description}
                    <br />
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderSection(data.profile, 'Profile')}
      {renderSection(data.publicaitons, 'Publications')}
      {renderSection(data.career, 'Career')}
      {renderSection(data.awards, 'Awards')}
      {renderSection(data.scholarships, 'Scholarships')}
    </div>
  );
};

