import { router } from "@inertiajs/react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "~/context/ResumeInfoContext";

export default function PersonalDetail({ enabledNext, postId }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  function handleChange(e) {
    enabledNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  }

  useEffect(() => {
    setFormData({
      firstName: resumeInfo?.firstName || "",
      lastName: resumeInfo?.lastName || "",
      jobTitle: resumeInfo?.jobTitle || "",
      address: resumeInfo?.address || "",
      phone: resumeInfo?.phone || "",
      email: resumeInfo?.email || "",
    });
  }, [resumeInfo]);

  const [formData, setFormData] = useState({
    firstName: resumeInfo?.firstName || "",
    lastName: resumeInfo?.lastName || "",
    jobTitle: resumeInfo?.jobTitle || "",
    address: resumeInfo?.address || "",
    phone: resumeInfo?.phone || "",
    email: resumeInfo?.email || "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    enabledNext(true);
    router.put(`/updateResume/${postId}`, formData);
  }
  return (
    <div className="mt-10 rounded-lg border-t-4 border-t-blue-300 p-5 shadow-lg">
      <h2 className="text-lg font-bold">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={handleSubmit}>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <input
              name="firstName"
              onChange={handleChange}
              defaultValue={resumeInfo?.firstName}
              className="w-full rounded-lg border-gray-200"
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <input
              name="lastName"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.lastName}
              className="w-full rounded-lg border-gray-200"
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <input
              name="jobTitle"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.jobTitle}
              className="w-full rounded-lg border-gray-200"
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <input
              name="address"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.address}
              className="w-full rounded-lg border-gray-200"
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <input
              name="phone"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.phone}
              className="w-full rounded-lg border-gray-200"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              name="email"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.email}
              className="w-full rounded-lg border-gray-200"
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <button
            className="flex gap-2 rounded-lg bg-blue-500 px-4 py-3 text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
