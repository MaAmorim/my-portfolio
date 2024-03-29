import Image from 'next/image';
import React from 'react';
import { RevealWrapper } from 'next-reveal';
import { ProjectsGallery, ProjectsSection, ProjectsTitle, ProjectsDownloadButton } from './ProjectsStyles';

const Projects = (props) => {
  return (
    <ProjectsSection ref={props.reference}>
      <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="top">
        <ProjectsTitle>
          Últimos<strong> Projetos</strong>
        </ProjectsTitle>
      </RevealWrapper>
      <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="bottom">
        <ProjectsGallery>
          <Image src="/images/projects/setup1.jpg" width={330} height={210} alt="Setup 1" />
          <Image src="/images/projects/setup3.jpg" width={330} height={210} alt="Setup 3" />
          <ProjectsDownloadButton
            href="/documents/themes_work.zip"
            download="Tema"
            aria-label="Baixe o Tema"
          />
        </ProjectsGallery>
      </RevealWrapper>
    </ProjectsSection>
  );
};

export default Projects;
