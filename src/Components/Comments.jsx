import { Face } from "@mui/icons-material";
import { Rating } from "@mui/material";

const Comments = ({ comments }) => {
  return (
    <section>
      <div className="flex flex-col items-start justify-center  w-full ">
        {comments.map((comment) => (
          <div className="flex items-start justify-between bg-white w-full border-b border-b-borderColor  p-8">
            <div
              className=" flex flex-col items-start justify-center w-full gap-8 "
              key={comment.id}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="w-16 h-16 bg-hoverColor rounded-full">
                  <Face className="w-16 h-16 text-textSecondary" />
                </div>
                <div>
                  <div className="mb-2">
                    <span> {comment.firstName}</span>
                    &nbsp;
                    <span>{comment.lastName}</span>
                  </div>
                  <Rating
                    value={comment.rate}
                    className="text-primary"
                    readOnly
                  />
                </div>
              </div>
              <div className="">{comment.text}</div>
            </div>
            <div className="text-sm text-textSecondary">24 فروردین 1402</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
