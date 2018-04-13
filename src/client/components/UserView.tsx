import * as React from "react";

export default class UserView extends React.Component<any, any> {
  render() {
    const { profilePicUrl, firstName, lastName, username, jobTitle, phoneNumber, fbLink, twitterLink, instagramLink, address,
      _id: id
    } = this.props.user;
    const { onEditClick, onDeleteClick } = this.props;
    return (
      <div className="max-w-md  w-full bg-black text-white flex p-2 rounded-lg shadow border-2 border-black mb-2">
        <div className="h-32 w-32">
          <img className="h-full w-full" src={profilePicUrl || "data:image/png;base64,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"} />
        </div>
        <div className="flex-auto relative p-2">
          <h4>Name : {firstName} {lastName}</h4>
          {jobTitle && <p className="mb-4">Job Title : {jobTitle}</p>}
          {address && <p className="mb-4">Address : {address}</p>}
          <p className="mb-4">Email : {username}</p>
          <div className="absolute pin-b w-full">
            <button
              onClick={() => { onEditClick(id); }}
              // tslint:disable-next-line:max-line-length
              className="bg-blue hover:bg-blue-dark w-1/3 text-white font-semibold py-2 px-4 rounded shadow mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => { onDeleteClick(id); }}
              // tslint:disable-next-line:max-line-length
              className="bg-red-dark w-1/3 hover:bg-red-darker text-white font-semibold py-2 px-4 rounded shadow "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}