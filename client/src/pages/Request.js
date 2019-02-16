import React from "react";
import SubmitBtn from "../components/SubmitBtn/index";

function Request() {
  return (
    <div class="form-group">
      <label for="comment">Comment:</label>
      <textarea class="form-control" rows="5" id="comment" />
      {/*       
      <button type="submit" class="btn btn-default" id="saveWish">
        Submit
      </button>
       */}
      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
    </div>
  );
}

export default Request;
