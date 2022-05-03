import React from 'react';
import {
    AboutSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Justin Chapman" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <AboutSection sectionId="about" heading="About Justin" />
                <InterestsSection sectionId="details" heading="Skillset" />
                <ProjectsSection sectionId="projects" heading="Projects" />
                <ContactSection sectionId="github" heading="Looking to connect?" />
            </Page>
        </>
    );
}
