"use client";

import { ClientOnly } from "@/components/ClientOnly";
import { AssignDatesModal } from "@/components/AssignDatesModal";
import { ProcessingImportModal } from "@/components/ProcessingImportModal";
import { useState } from "react";
import {
  ModusWcButton,
  ModusWcCard,
  ModusWcBadge,
  ModusWcAlert,
  ModusWcAccordion,
  ModusWcCollapse,
} from "@trimble-oss/moduswebcomponents-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessingModalOpen, setIsProcessingModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenProcessingModal = () => {
    setIsProcessingModalOpen(true);
  };

  const handleCloseProcessingModal = () => {
    setIsProcessingModalOpen(false);
  };

  const handleCancelProcessing = () => {
    console.log("Processing cancelled");
    setIsProcessingModalOpen(false);
  };

  const handleImport = (
    files: Array<{
      id: string;
      fileName: string;
      surveyDate: string;
      surveyTime: string;
      status: "Assigned" | "Pending";
      selected: boolean;
    }>
  ) => {
    console.log("Importing files:", files);
    // Handle the imported files here
  };

  const loadingFallback = (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Accordion collapse options
  const accordionItems = [
    {
      title: "Getting Started",
      description: "Learn the basics",
      icon: "play_circle",
      iconAriaLabel: "Play",
      content:
        "This section covers the fundamental concepts and initial setup required to get started with Modus Web Components. You'll learn about installation, basic configuration, and your first component implementation.",
    },
    {
      title: "Components Overview",
      description: "Explore available components",
      icon: "widgets",
      iconAriaLabel: "Widgets",
      content:
        "Discover the comprehensive library of Modus Web Components including buttons, cards, forms, navigation elements, and more. Each component is designed with accessibility and consistency in mind.",
    },
    {
      title: "Theming & Customization",
      description: "Customize your design",
      icon: "palette",
      iconAriaLabel: "Palette",
      content:
        "Learn how to customize the appearance of components using the Modus theme system. You can switch between light and dark modes, and customize colors, typography, and spacing to match your brand.",
    },
    {
      title: "Advanced Features",
      description: "Unlock powerful capabilities",
      icon: "settings",
      iconAriaLabel: "Settings",
      content:
        "Explore advanced features like custom event handling, complex data binding, form validation, and integration with popular frameworks like React, Angular, and Vue.",
    },
  ];

  return (
    <ClientOnly fallback={loadingFallback}>
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Modus Next.js Boilerplate
              </h1>
              <p className="text-lg opacity-75">
                A Next.js boilerplate with Modus Web Components and Icons
              </p>
            </div>
          </header>

          {/* Alert */}
          <div className="mb-8">
            <ModusWcAlert
              alertDescription="Welcome to your Modus Next.js boilerplate! This demonstrates the integration of Modus Web Components."
              variant="success"
              dismissible={true}
            />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons Section */}
            <ModusWcCard>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <ModusWcButton color="primary">Primary</ModusWcButton>
                    <ModusWcButton color="secondary">Secondary</ModusWcButton>
                    <ModusWcButton color="danger">Danger</ModusWcButton>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <ModusWcButton variant="outlined" color="primary">
                      Outline Primary
                    </ModusWcButton>
                    <ModusWcButton variant="borderless" color="primary">
                      Borderless Button
                    </ModusWcButton>
                  </div>
                </div>
              </div>
            </ModusWcCard>

            {/* Icons Section */}
            <ModusWcCard>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Modus Icons</h2>
                <div className="space-y-4">
                  <p className="text-sm opacity-75 mb-4">
                    Icons are loaded from the Modus Icons CDN and can be used
                    with the icon font classes:
                  </p>
                  <div className="flex flex-wrap gap-4 text-2xl">
                    <i className="modus-icons" title="Home">
                      home
                    </i>
                    <i className="modus-icons" title="Settings">
                      settings
                    </i>
                    <i className="modus-icons" title="User">
                      person
                    </i>
                    <i className="modus-icons" title="Search">
                      search
                    </i>
                    <i className="modus-icons" title="Calendar">
                      calendar
                    </i>
                    <i className="modus-icons" title="Mail">
                      mail
                    </i>
                  </div>
                  <div className="mt-4 space-y-2">
                    <ModusWcButton color="primary">
                      <i className="modus-icons mr-2">add</i>
                      Button with Icon
                    </ModusWcButton>
                    <div className="space-y-2">
                      <ModusWcButton
                        color="secondary"
                        onClick={handleOpenModal}
                      >
                        <i className="modus-icons mr-2">calendar</i>
                        Assign Dates
                      </ModusWcButton>
                      <div>
                        <ModusWcButton
                          color="primary"
                          onClick={handleOpenProcessingModal}
                        >
                          <i className="modus-icons mr-2">cloud_upload</i>
                          Processing Import
                        </ModusWcButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModusWcCard>

            {/* Badges Section */}
            <ModusWcCard>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Badges</h2>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <ModusWcBadge content="Default" />
                    <ModusWcBadge content="Primary" color="primary" />
                    <ModusWcBadge content="Warning" color="warning" />
                    <ModusWcBadge content="Danger" color="danger" />
                  </div>
                </div>
              </div>
            </ModusWcCard>

            {/* Theme Information */}
            <ModusWcCard>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Theme System</h2>
                <div className="space-y-4">
                  <p className="text-sm opacity-75">
                    This boilerplate is configured to use the Modus Classic
                    Light theme exclusively, providing a consistent and
                    professional appearance.
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Current Theme:</strong> Modus Classic Light
                    </p>
                    <p>
                      <strong>Theme Mode:</strong> Light (Fixed)
                    </p>
                    <p>
                      <strong>Design System:</strong> Modus Design System
                    </p>
                  </div>
                </div>
              </div>
            </ModusWcCard>
          </div>

          {/* Accordion Section */}
          <div className="mt-8">
            <ModusWcCard>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Accordion Component
                </h2>
                <p className="text-sm opacity-75 mb-6">
                  Interactive accordion component with collapsible sections.
                  Click on any section to expand or collapse it.
                </p>
                <ModusWcAccordion
                  customClass="accordion-demo"
                  onExpandedChange={(e) => {
                    console.log("Accordion item expanded:", e.detail);
                  }}
                >
                  {accordionItems.map((item, index) => (
                    <ModusWcCollapse
                      key={index}
                      bordered={true}
                      options={{
                        title: item.title,
                        description: item.description,
                        icon: item.icon,
                        iconAriaLabel: item.iconAriaLabel,
                        size: "md",
                      }}
                    >
                      <div
                        slot="content"
                        className="p-4 text-sm leading-relaxed"
                      >
                        {item.content}
                      </div>
                    </ModusWcCollapse>
                  ))}
                </ModusWcAccordion>
              </div>
            </ModusWcCard>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center opacity-75">
            <p>
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/trimble-oss/modus-web-components"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Modus Web Components
              </a>
            </p>
          </footer>
        </div>

        {/* Assign Dates Modal */}
        <AssignDatesModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onImport={handleImport}
        />

        {/* Processing Import Modal */}
        <ProcessingImportModal
          isOpen={isProcessingModalOpen}
          onClose={handleCloseProcessingModal}
          onCancel={handleCancelProcessing}
        />
      </div>
    </ClientOnly>
  );
}
