import { Face } from "@mui/icons-material";
import { Rating } from "@mui/material";

const Comments = ({ comments }) => {
  return (
    <section>
      <div className="bg-white flex items-center justify-between p-8 border-b border-b-borderColor">
        <h2 className="font-bold ">تجربه های مشتریان</h2>
        <div className="flex flex-col items-start justify-start gap-2">
          <div>
            <div>
              <span className="font-bold text-6xl">4.5</span>
              &nbsp;
              <span>از 5 </span>
            </div>
            <div>12 تجربه ثبت شده است</div>
          </div>
          <Rating
            name="half-rating-read"
            className="text-primary"
            precision={0.1}
            value={4.5}
            readOnly
          />
        </div>
      </div>
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
