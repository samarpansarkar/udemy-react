import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";
export default function noProjectSelected({ onStatAddProject }) {
  return (
    <div className="mt-2 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="no project"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Project Selected!
      </h2>
      <p className="text-stone-400 mb-4">
        select a project or get started with a new one.
      </p>
      <p className="mt-8">
        {/* <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          Create New Project
        </button> */}
        <Button onClick={onStatAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
