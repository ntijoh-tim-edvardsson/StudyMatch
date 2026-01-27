import {
  Button,
  Label,
  TextInput,
  FileInput,
  Avatar,
  Checkbox,
} from "flowbite-react";
import { useState } from "react";

export function MyProfile() {
  const [preview, setPreview] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    school: "",
    age: "",
    program: "",
    year: "",
    studyPreference: [] as string[],
    profilePicture: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      studyPreference: checked
        ? [...prev.studyPreference, value]
        : prev.studyPreference.filter(item => item !== value),
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    setPreview(URL.createObjectURL(file));
    setFormData(prev => ({ ...prev, profilePicture: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 bg-white p-6 rounded-lg shadow-md"
      >
        {/* Name */}
        <div>
          <Label htmlFor="name">Your name</Label>
          <TextInput
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        {/* School */}
        <div>
          <Label htmlFor="school">Your school</Label>
          <TextInput
            id="school"
            name="school"
            required
            value={formData.school}
            onChange={handleInputChange}
          />
        </div>

        {/* Age */}
        <div>
          <Label htmlFor="age">Your age</Label>
          <TextInput
            id="age"
            name="age"
            type="number"
            required
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>

        {/* Program */}
        <div>
          <Label htmlFor="program">Your program</Label>
          <TextInput
            id="program"
            name="program"
            required
            value={formData.program}
            onChange={handleInputChange}
          />
        </div>

        {/* Year */}
        <div>
          <Label htmlFor="year">Your year</Label>
          <TextInput
            id="year"
            name="year"
            required
            value={formData.year}
            onChange={handleInputChange}
          />
        </div>

        {/* Study Preference */}
        <Label>Your study preference</Label>
        <div className="flex justify-between w-full mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              id="solo"
              value="Alone"
              checked={formData.studyPreference.includes("Alone")}
              onChange={handleCheckboxChange}
            />
            <span>Alone</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              id="one-on-one"
              value="1 on 1"
              checked={formData.studyPreference.includes("1 on 1")}
              onChange={handleCheckboxChange}
            />
            <span>1 on 1</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              id="group"
              value="Group"
              checked={formData.studyPreference.includes("Group")}
              onChange={handleCheckboxChange}
            />
            <span>Group</span>
          </label>
        </div>

        {/* Profile Picture */}
        <div>
          <Label htmlFor="pfp">Your profile picture</Label>
          <FileInput
            id="pfp"
            accept="image/*"
            onChange={handleFileChange}
          />

          <Avatar
            className="mt-4"
            img={preview ?? undefined}
            rounded
            size="lg"
          />
        </div>

        <Button type="submit" color="green">
          Save Profile
        </Button>
      </form>
    </div>
  );
}

export default MyProfile;
