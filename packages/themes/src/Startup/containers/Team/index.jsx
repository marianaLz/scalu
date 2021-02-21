import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/src/components/Box"
import Fade from "react-reveal/Fade"
import Typography from "@pagerland/common/src/components/Typography"
import Container from "@pagerland/common/src/components/Container"
import Grid from "@pagerland/common/src/components/Grid"

import data from "../../data"
import Avatar from "../../components/Avatar"
import Background from "./Background"

const Team = ({
  name,
  title,
  people,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  GridProps,
  PersonWrapperProps,
  AvatarProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
        </Fade>
      </Box>
      <Grid {...GridProps}>
        {people.map((person, key) => (
          <Fade bottom cascade duration={600} delay={key * 100}>
            <Box {...PersonWrapperProps}>
              <Avatar {...AvatarProps} {...person.avatar} />
            </Box>
          </Fade>
        ))}
      </Grid>
    </Container>
  </Box>
)

Team.propTypes = {
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
   * Props of services grid wrapper
   * @See @pagerland/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Props of button below grid
   * @See @pagerland/common/src/components/Button
   */
  CtaProps: PropTypes.object,
  /**
   * Props of single person item wrapper
   * @See @pagerland/common/src/components/Box
   */
  PersonWrapperProps: PropTypes.object,
  /**
   * Props of person avatar
   */
  AvatarProps: PropTypes.object,
  /**
   * Props of person name
   */
  NameProps: PropTypes.object,
  /**
   * Props of person position
   */
  PositionProps: PropTypes.object,
  /**
   * Props of linkedin link icon
   */
  LinkedinIconProps: PropTypes.object,
  /**
   * Props of twitter link icon
   */
  TwitterIconProps: PropTypes.object,
  /**
   * Props of skype link icon
   */
  SkypeIconProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Cta button details
   */
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
  /**
   * List of team members
   */
  people: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.object,
      name: PropTypes.node,
      position: PropTypes.node,
      social: PropTypes.shape({
        linkedin: PropTypes.string,
        twitter: PropTypes.string,
        skype: PropTypes.string,
      }),
    })
  ),
}

Team.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 150,
    },
    position: "relative",
  },
  ContainerProps: {
    textAlign: "center",
  },
  CaptionProps: {
    mb: {
      _: 4,
      md: 5,
    },
    mx: "auto",
    maxWidth: 736,
  },
  TitleProps: {
    as: "h2",
    variant: "h2",
    color: "gray.8",
    textAlign: "center",
  },
  TextProps: {
    color: "gray.1",
    mb: 4,
  },
  GridProps: {
    mb: {
      _: 4,
      md: 5,
    },
    mt: {
      _: 40,
      sm: 40,
      md: 80,
      lg: 100,
    },
    gridTemplateColumns: {
      _: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    gridColumnGap: "32px",
    gridRowGap: {
      _: "32px",
      md: "64px",
    },
  },
  AvatarProps: {
    mb: 2,
  },
  NameProps: {
    variant: "h5",
    color: "black",
  },
  PositionProps: {
    color: "gray.1",
    mb: 2,
  },
  CtaProps: {
    textAlign: "center",
    mx: "auto",
    variant: "secondary",
    as: "a",
  },
  LinkedinIconProps: {
    mx: 2,
    color: "primary",
    fontSize: 24,
  },
  TwitterIconProps: {
    mx: 2,
    color: "secondary",
    fontSize: 24,
  },
  SkypeIconProps: {
    mx: 2,
    color: "accent",
    fontSize: 24,
  },
  ...data.team,
}

export default Team
