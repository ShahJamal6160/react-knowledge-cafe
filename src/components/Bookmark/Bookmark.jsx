import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3 className="text-2xl text-center border-2 rounded-lg">{title}</h3>
        </div>
    );
};

Bookmark.propTypes={
    bookmark: PropTypes.object
}
export default Bookmark;