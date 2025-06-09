"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ModusWcModal,
  ModusWcButton,
  ModusWcLoader,
} from "@trimble-oss/moduswebcomponents-react";

interface FileUploadData {
  id: string;
  fileName: string;
  status: "Uploading" | "Completed" | "Failed";
}

interface ProcessingImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
  files?: FileUploadData[];
}

export const ProcessingImportModal: React.FC<ProcessingImportModalProps> = ({
  isOpen,
  onClose,
  onCancel,
  files = [
    { id: "1", fileName: "File name goes here", status: "Uploading" },
    { id: "2", fileName: "File name goes here", status: "Uploading" },
    { id: "3", fileName: "File name goes here", status: "Uploading" },
    { id: "4", fileName: "File name goes here", status: "Uploading" },
  ],
}) => {
  // Handle modal visibility with Modus Web Components
  useEffect(() => {
    const modalElement = document.getElementById("processing-import-modal");
    if (modalElement) {
      if (isOpen) {
        modalElement.setAttribute("open", "true");
      } else {
        modalElement.removeAttribute("open");
      }
    }
  }, [isOpen]);

  const handleModalClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleCancel = () => {
    onCancel();
    handleModalClose();
  };

  return (
    <>
      <style jsx>{`
        :global(.processing-modal .modus-wc-modal-box) {
          width: 1000px !important;
          max-width: none !important;
          height: auto !important;
          max-height: 80% !important;
        }
        .cloud-illustration {
          width: 189px;
          height: 139px;
          margin: 0 auto;
        }
      `}</style>
      <ModusWcModal
        modalId="processing-import-modal"
        aria-label="Processing Import"
        customClass="processing-modal"
      >
        <span slot="header">Processing Import</span>

        <div slot="content" className="space-y-8 py-4">
          {/* Cloud Illustration */}
          <div className="flex flex-col items-center space-y-4">
            <div className="cloud-illustration">
              <Image
                src="/upload.svg"
                alt="Cloud upload illustration"
                width={189}
                height={139}
              />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                Import in Progress
              </h3>
              <p className="text-sm text-gray-600">
                Do not close this browser tab while import is in progress.
              </p>
            </div>
          </div>

          {/* Files Table */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-sm text-gray-700">
                      File Name
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-sm text-gray-700 w-32">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {files.map((file) => (
                    <tr
                      key={file.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-4">
                        <span className="text-sm text-gray-900">
                          {file.fileName}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <span className="text-sm text-gray-600">
                            {file.status}
                          </span>
                          {file.status === "Uploading" && (
                            <ModusWcLoader size="sm" color="primary" />
                          )}
                          {file.status === "Completed" && (
                            <i className="modus-icons text-green-600">
                              check_circle
                            </i>
                          )}
                          {file.status === "Failed" && (
                            <i className="modus-icons text-red-600">
                              cancel_circle
                            </i>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div slot="footer" className="flex justify-end">
          <ModusWcButton color="primary" size="md" onClick={handleCancel}>
            Cancel
          </ModusWcButton>
        </div>
      </ModusWcModal>
    </>
  );
};
