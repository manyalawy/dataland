import React, { useState } from "react";

export default function Heading() {
  const [issue, setIssue] = useState(null);
  return (
    <div className="heading">
      <div>
        <div className="issue_container">
          <button
            onClick={() => {
              setIssue(null);
            }}
            className={
              issue === null ? "issue_button_eng bright" : "issue_button_eng"
            }
          >
            ALL
          </button>
          <button
            onClick={() => {
              setIssue(1);
            }}
            className={
              issue === 1 ? "issue_button_eng bright" : "issue_button_eng"
            }
          >
            ISSUE 1
          </button>
          <button
            onClick={() => {
              setIssue(2);
            }}
            className={
              issue === 2 ? "issue_button_eng bright" : "issue_button_eng"
            }
          >
            ISSUE 2
          </button>
          <button
            onClick={() => {
              setIssue(3);
            }}
            className={
              issue === 3 ? "issue_button_eng bright" : "issue_button_eng"
            }
          >
            ISSUE 3
          </button>
        </div>
        <div className="heading-eng">PUBLIC ADMINISTRATIVE BUILDINGS</div>
        <div className="subheading-eng">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis
          massa in sollicitudin mattis. Vestibulum vitae ultricies velit, vel
          tincidunt sapien. Nunc enim libero, tincidunt sapien. Nunc enim{" "}
        </div>
      </div>
      <div>
        <div
          className="issue_container"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => {
              setIssue(3);
            }}
            className={
              issue === 3 ? "issue_button_ar bright" : "issue_button_ar"
            }
          >
            عدد ٣
          </button>
          <button
            onClick={() => {
              setIssue(2);
            }}
            className={
              issue === 2 ? "issue_button_ar bright" : "issue_button_ar"
            }
          >
            عدد ٢
          </button>
          <button
            onClick={() => {
              setIssue(1);
            }}
            className={
              issue === 1 ? "issue_button_ar bright" : "issue_button_ar"
            }
          >
            عدد ١
          </button>
          <button
            onClick={() => {
              setIssue(null);
            }}
            className={
              issue === null ? "issue_button_ar bright" : "issue_button_ar"
            }
          >
            الكل
          </button>
        </div>
        <div className="heading-ar">المباني الإدارية العامة</div>
        <div className="subheading-ar">
          لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
          ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال
          المعيار للنص{" "}
        </div>
      </div>
    </div>
  );
}
