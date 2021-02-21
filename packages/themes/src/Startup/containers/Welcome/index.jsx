import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/src/components/Box"
import Fade from "react-reveal/Fade"
import Typography from "@pagerland/common/src/components/Typography"
import Button from "@pagerland/common/src/components/Button"

import data from "../../data"

import {
  ContainerWithBackground,
  RoundedImage,
  Rectangle,
} from "./styled.components"
import Squares from "./Squares"

const Welcome = ({
  name,
  title,
  text,
  img,
  actions,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ActionButtonsProps,
  ImageWrapperProps,
  ImageProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <ContainerWithBackground {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>
            {title} <Rectangle />
          </Typography>
          <Typography {...TextProps}>{text}</Typography>
          <Box {...ActionButtonsProps}>
            {actions.map(({ label, ...props }, key) => (
              <Button {...props} key={key}>
                {label}
              </Button>
            ))}
          </Box>
        </Fade>
      </Box>
      <Box {...ImageWrapperProps}>
        <Squares />
        <Fade cascade duration={600}>
          <RoundedImage {...ImageProps} {...img} />
        </Fade>
      </Box>
    </ContainerWithBackground>
  </Box>
)

Welcome.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Caption props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Wrapper with action buttons
   * @See @pagerland/common/src/components/Box
   */
  ActionButtonsProps: PropTypes.object,
  /**
   * Wrapper for image
   * @See @pagerland/common/src/components/Box
   */
  ImageWrapperProps: PropTypes.object,
  /**
   * Welcome image props
   * @See @pagerland/common/src/components/Img
   */
  ImageProps: PropTypes.object,
  /**
   * List of props for avatars
   * @See @pagerland/common/src/components/Avatar
   */
  AvatarsProps: PropTypes.arrayOf(PropTypes.object),
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Img details
   */
  img: PropTypes.object,
  /**
   * Action buttons
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
  /**
   * List floating of avatars
   */
  avatars: PropTypes.arrayOf(PropTypes.object),
}

Welcome.defaultProps = {
  WrapperProps: {
    overflow: "hidden",
  },
  ContainerProps: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: {
      _: "column",
      lg: "row",
    },
  },
  CaptionProps: {
    my: {
      _: 26,
      md: 70,
      lg: 135,
    },
    maxWidth: {
      _: 500,
      lg: 457,
    },
  },
  TitleProps: {
    as: "h1",
    variant: "h1",
    mb: 4,
    mx: "auto",
    color: "gray.8",
  },
  TextProps: {
    variant: "body1",
    color: "gray.1",
  },
  ActionButtonsProps: {
    mt: 4,
    width: 172,
    height: 48,
    letterSpacing: ".07em",
  },
  ImageWrapperProps: {
    zIndex: 4,
    position: "relative",
    my: {
      _: 78,
      md: 56,
      lg: 0,
    },
  },
  ImageProps: {
    width: "100%",
    maxWidth: 520,
  },
  AvatarsProps: [
    {
      position: "absolute",
      width: 87,
      height: 87,
      top: -92,
      left: 9,
    },
    {
      position: "absolute",
      width: 53,
      height: 53,
      top: -80,
      right: 167,
    },
    {
      position: "absolute",
      width: 56,
      height: 56,
      top: 209,
      right: -87,
    },
    {
      position: "absolute",
      width: 60,
      height: 60,
      bottom: -79,
      left: 264,
    },
    {
      position: "absolute",
      width: 87,
      height: 87,
      bottom: 3,
      left: -128,
    },
  ],
  ...data.welcome,
}

export default Welcome
