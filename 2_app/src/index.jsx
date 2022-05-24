import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import Faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  Faker.setLocale("it");
  return (
    <div className="ui container comments">
      <ApprovalCard>
        {/*  this is just like passing a prop/param     */}
        <CommentDetail
          comment_content={Faker.random.words()}
          avatar_picture={Faker.image.avatar()}
          name="Genny l' immortale"
          when="Today at 1:00"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          comment_content={Faker.random.words()}
          avatar_picture={Faker.image.avatar()}
          name={Faker.name.firstName()}
          when="Today at 2:00"
        />{" "}
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          comment_content={Faker.random.words()}
          avatar_picture={Faker.image.avatar()}
          name={Faker.name.firstName()}
          when="Today at 3:00"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          comment_content={Faker.random.words()}
          avatar_picture={Faker.image.avatar()}
          name="Noice"
          when="Today at 4:00"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
