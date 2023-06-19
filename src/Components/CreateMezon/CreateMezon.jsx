import { useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const CreateMezon = () => {
  const [condition, setCondition] = useState(false);

  return (
    <div className="w-full flex items-center justify-center">
      {!condition ? <PageOne setCondition={setCondition} /> : <PageTwo />}
    </div>
  );
};

export default CreateMezon;
