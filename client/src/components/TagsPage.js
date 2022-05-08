import React from "react";
import HeaderRow from "./HeaderRow";

export default class TagsPage extends React.Component {
  render() {
    const { handleAskAQuestion, handleTagLinkClick, methods } = this.props;
    const tags_lst = methods.getTagsLst();
    return (
      <div>
        <HeaderRow
          column1={`${methods.getNumberOfTags()} Tags`}
          column2="All Tags"
          handleAskAQuestion={handleAskAQuestion}
        />
        {/* Tags Table */}

        <div className="tags-table">
          {tags_lst.map((tagObj) => (
            <div className="tag-div" key={tagObj.tid}>
              <div className="tag-link-div">
                <button
                  className="tags-link"
                  onClick={() => handleTagLinkClick(tagObj)}
                >
                  {tagObj.name}
                </button>
              </div>
              <div className="tag-counter-div">
                {methods.searchForQuestionTags(tagObj.name).length === 1
                  ? `${
                      methods.searchForQuestionTags(tagObj.name).length
                    } question`
                  : `${
                      methods.searchForQuestionTags(tagObj.name).length
                    } questions`}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
