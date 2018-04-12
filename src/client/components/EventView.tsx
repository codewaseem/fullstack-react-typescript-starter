import * as React from "react";

export default class EventView extends React.Component<any, any> {
  render() {
    const { name, description, imageLink, privateEvent, date, heading1, text1, heading2, text2, heading3, text3, btnText,
      btnLink, _id: id
    } = this.props.event;
    const { onEditClick, onDeleteClick } = this.props;
    return (
      <div className="max-w-md w-full bg-black text-white flex p-2 rounded-lg shadow border-2 border-black mb-2">
        <div className="h-32 w-48">
          <img className="h-full w-full" src={imageLink} />
        </div>
        <div className="flex-auto p-2">
          <h5>Name : {name}</h5>
          <p>Description : <small>{description.slice(0, 80)}...</small></p>
          <h5>Private Event : {privateEvent ? "Yes" : "No"}</h5>
          <h5>Date : {(new Date(date).toDateString())}</h5>
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
            className="bg-red-dark w-1/3 hover:bg-red-darker text-white font-semibold py-2 px-4 rounded shadow mr-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}