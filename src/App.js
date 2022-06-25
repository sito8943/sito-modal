import { forwardRef } from "react";

// @emotion
import { css } from "@emotion/css";

// sito components
import SitoContainer from "sito-container";

// prop-types
import PropTypes from "prop-types";

const SitoModal = forwardRef((props, ref) => {
  const {
    backdropBackground,
    backdropFilter,
    background,
    extraProps,
    children,
    display,
    alignItems,
    justifyContent,
    flexDirection,
    className,
    sx,
    id,
    name,
    style,
  } = props;

  const modalSx = css({
    flexDirection,
    display,
    alignItems,
    justifyContent,
    background: background || "transparent",
    padding: "20px",
    borderRadius: "1rem",
    width: "250px",
    height: "250px",
    ...sx,
  });

  return (
    <SitoContainer
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: backdropBackground,
        backdropFilter: backdropFilter,
      }}
    >
      <SitoContainer
        ref={ref}
        style={style}
        id={id}
        name={name}
        className={`${className} ${modalSx}`}
        {...extraProps}
      >
        {children}
      </SitoContainer>
    </SitoContainer>
  );
});

SitoModal.defaultProps = {
  backdropBackground: "#222222ec",
  backdropFilter: "blur(4px)",
  background: "#222333",
  alignItems: "left",
  justifyContent: "left",
  className: "",
  id: "",
  name: "",
  sx: {},
  style: {},
  extraProps: {},
  children: <span>This is a container</span>,
};

SitoModal.propTypes = {
  children: PropTypes.node,
  backdropBackground: PropTypes.string,
  backdropFilter: PropTypes.string,
  background: PropTypes.string,
  className: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  extraProps: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default SitoModal;
