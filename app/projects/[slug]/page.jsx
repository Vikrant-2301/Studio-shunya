import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/studioData";
import ProjectDetailView from "@/components/ProjectDetailView";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found | Studio Shunya" };

  return {
    title: `${project.title} | Studio Shunya Architecture`,
    description: `${project.tagline} — Located in ${project.location}. Sustainable, zero-energy living earth architecture by Ar. Shreya Srivastava.`,
    openGraph: {
      title: `${project.title} | Studio Shunya Architecture`,
      description: project.tagline,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectDetailPage({ params }) {
  const projectIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (projectIndex === -1) notFound();

  const project = PROJECTS[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  return (
    <ProjectDetailView
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}