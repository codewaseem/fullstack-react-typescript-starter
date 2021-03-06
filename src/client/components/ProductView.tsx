import * as React from "react";

export default class ProductView extends React.Component<any, any> {
  render() {
    const { imageLink, name, description, rsvpLink, _id: id } = this.props.product;
    const { onEditClick, onDeleteClick } = this.props;
    return (
      <div className="w-full sm:max-w-xs p-1 ">
        <div className="bg-black text-white rounded overflow-hidden shadow-lg">
          <img className="w-full h-54" src={imageLink} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-grey-darker text-base">
              {description.slice(0, 100)}...
            </p>
            <div className="w-full px-2 text-center mt-8">
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
        </div>
      </div >
    );
  }
}
{/* <div>
  <div><img src={image_url} /></div>
  <div>
    <div>
      <h5>Name</h5>
      <span>{name}</span>
    </div>
    <div>
      <h5>Description</h5>
      <span>{description}</span>
    </div>
    <div>
      <h5>RSVP Link</h5>
      <span>{rsvp_link}</span>
    </div>
  </div>
  <div>
    <span onClick={() => { handleEditClick(id); }}>Edit</span>
    <span onClick={() => { handleDeleteClick(id); }}>Delete</span>
  </div>
</div> */}