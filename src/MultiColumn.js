import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex: 1 1 0%;
  margin-right: ${props => props.gutter}px;

  &:last-child {
    margin-right: 0px;
  }
`;

const MultiColumn = ({ columns, gutter, children, ...rest }) => {
  const columnBuilder = () => {
    if (columns === 1) {
      return (
        <Column key="column-0" gutter={gutter}>{children}</Column>
      );
    }

    const builtColumns = [];

    for (let i = 0; i < columns; i++) {
      const columnData = [];
      for (let j = i % columns; j < children.length; j += columns) {
        columnData.push(children[j]);
      }
      builtColumns.push(<Column key={`column-${i}`} gutter={gutter}>{columnData}</Column>);
    }

    return builtColumns;
  };

  return (
    <Container {...rest}>
      {columnBuilder()}
    </Container>
  );
};

MultiColumn.propTypes = {
  columns: PropTypes.number,
  gutter: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

MultiColumn.defaultProps = {
  columns: 1,
  gutter: 16,
};

export default MultiColumn;
