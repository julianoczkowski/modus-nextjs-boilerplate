"use client";

import React, { useState, useEffect } from "react";
import {
  ModusWcModal,
  ModusWcButton,
  ModusWcAlert,
  ModusWcDate,
  ModusWcTimeInput,
  ModusWcCheckbox,
  ModusWcBadge,
} from "@trimble-oss/moduswebcomponents-react";

interface FileData {
  id: string;
  fileName: string;
  surveyDate: string;
  surveyTime: string;
  status: "Assigned" | "Pending";
  selected: boolean;
}

interface AssignDatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (files: FileData[]) => void;
}

export const AssignDatesModal: React.FC<AssignDatesModalProps> = ({
  isOpen,
  onClose,
  onImport,
}) => {
  const [bulkDate, setBulkDate] = useState("");
  const [bulkTime, setBulkTime] = useState("");
  const [files, setFiles] = useState<FileData[]>([
    {
      id: "1",
      fileName: "File name goes here",
      surveyDate: "",
      surveyTime: "",
      status: "Assigned",
      selected: false,
    },
    {
      id: "2",
      fileName: "File name goes here",
      surveyDate: "",
      surveyTime: "",
      status: "Assigned",
      selected: false,
    },
    {
      id: "3",
      fileName: "File name goes here",
      surveyDate: "",
      surveyTime: "",
      status: "Assigned",
      selected: false,
    },
    {
      id: "4",
      fileName: "File name goes here",
      surveyDate: "",
      surveyTime: "",
      status: "Assigned",
      selected: false,
    },
    {
      id: "5",
      fileName: "File name goes here",
      surveyDate: "",
      surveyTime: "",
      status: "Assigned",
      selected: false,
    },
  ]);

  const selectedCount = files.filter((file) => file.selected).length;
  const allSelected = files.every((file) => file.selected);

  // Handle modal visibility with Modus Web Components
  useEffect(() => {
    const modalElement = document.getElementById("assign-dates-modal");
    if (modalElement) {
      if (isOpen) {
        modalElement.setAttribute("open", "true");
      } else {
        modalElement.removeAttribute("open");
      }
    }
  }, [isOpen]);

  const handleModalClose = () => {
    onClose();
  };

  const handleSelectAll = () => {
    setFiles(files.map((file) => ({ ...file, selected: !allSelected })));
  };

  const handleFileSelect = (fileId: string) => {
    setFiles(
      files.map((file) =>
        file.id === fileId ? { ...file, selected: !file.selected } : file
      )
    );
  };

  const handleApplyBulk = () => {
    if (bulkDate || bulkTime) {
      setFiles(
        files.map((file) =>
          file.selected
            ? {
                ...file,
                surveyDate: bulkDate || file.surveyDate,
                surveyTime: bulkTime || file.surveyTime,
              }
            : file
        )
      );
    }
  };

  const handleFileUpdate = (
    fileId: string,
    field: "surveyDate" | "surveyTime",
    value: string
  ) => {
    setFiles(
      files.map((file) =>
        file.id === fileId ? { ...file, [field]: value } : file
      )
    );
  };

  const handleImport = () => {
    onImport(files);
    handleModalClose();
  };

  return (
    <>
      <style jsx>{`
        :global(.expanded-modal .modus-wc-modal-box) {
          width: 1000px !important;
          max-width: none !important;
          height: 70%;
          max-height: none !important;
        }
      `}</style>
      <ModusWcModal
        modalId="assign-dates-modal"
        aria-label="Assign Dates"
        customClass="expanded-modal"
      >
        <span slot="header">Assign Dates</span>
        <div slot="content" className="space-y-6">
          {/* Alert */}
          <ModusWcAlert
            alertDescription="Assign survey dates and times to each selected file. You can assign the same date to multiple files or set individual dates."
            variant="info"
            dismissible={false}
          />

          {/* Bulk Assign Section */}
          <div className="space-y-4 mt-8">
            <h3 className="text-sm font-semibold pb-4">Bulk Assign</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <ModusWcDate
                  label="Survey Date"
                  value={bulkDate}
                  onInputChange={(e: Event) =>
                    setBulkDate((e.target as HTMLInputElement).value)
                  }
                  size="sm"
                />
              </div>

              <div>
                <ModusWcTimeInput
                  label="Survey Time"
                  value={bulkTime}
                  onInputChange={(e: Event) =>
                    setBulkTime((e.target as HTMLInputElement).value)
                  }
                  size="sm"
                />
              </div>

              <div className="flex gap-2">
                <ModusWcButton
                  variant="outlined"
                  color="primary"
                  onClick={handleSelectAll}
                  size="sm"
                >
                  {allSelected ? "Deselect All" : "Select All"}
                </ModusWcButton>

                <ModusWcButton
                  color="primary"
                  disabled={selectedCount === 0 || (!bulkDate && !bulkTime)}
                  onClick={handleApplyBulk}
                  size="sm"
                >
                  Apply to {selectedCount} files
                </ModusWcButton>
              </div>
            </div>
          </div>

          {/* Files Table */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-600 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-left w-12">
                      <ModusWcCheckbox
                        value={allSelected}
                        indeterminate={selectedCount > 0 && !allSelected}
                        onInputChange={handleSelectAll}
                        size="sm"
                      />
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-700">
                      File Name
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-700">
                      Survey Date
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-700">
                      Survey Time
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-700 w-32">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {files.map((file) => (
                    <tr
                      key={file.id}
                      className="hover:bg-gray-50 transition-colors border-b border-gray-600"
                    >
                      <td className="px-4 py-4">
                        <ModusWcCheckbox
                          value={file.selected}
                          onInputChange={() => handleFileSelect(file.id)}
                          size="sm"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-gray-900">
                          {file.fileName}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <ModusWcDate
                          value={file.surveyDate}
                          onInputChange={(e: Event) =>
                            handleFileUpdate(
                              file.id,
                              "surveyDate",
                              (e.target as HTMLInputElement).value
                            )
                          }
                          size="sm"
                          bordered={true}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <ModusWcTimeInput
                          value={file.surveyTime}
                          onInputChange={(e: Event) =>
                            handleFileUpdate(
                              file.id,
                              "surveyTime",
                              (e.target as HTMLInputElement).value
                            )
                          }
                          size="sm"
                          bordered={true}
                        />
                      </td>
                      <td className="px-4 py-4">
                        <ModusWcBadge
                          content={file.status}
                          color={
                            file.status === "Assigned" ? "success" : "warning"
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div slot="footer" className="flex gap-2 justify-end">
          <ModusWcButton
            variant="borderless"
            color="primary"
            size="md"
            onClick={handleModalClose}
          >
            Cancel
          </ModusWcButton>
          <ModusWcButton color="primary" size="md" onClick={handleImport}>
            Import
          </ModusWcButton>
        </div>
      </ModusWcModal>
    </>
  );
};
