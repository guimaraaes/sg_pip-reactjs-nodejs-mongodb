import React from "react";
import { Pagination } from "react-bootstrap";

class Pagination_ extends React.Component {
  render() {
    return (
      <>
        <Pagination className="ml-5">
          {/* {this.props.page <= 1 && this.props.last <= this.props.page + 1 ? (
            <>
              c
              <Pagination.Item href={"?page=" + (this.props.page + 1)}>
                {this.props.page + 1}
              </Pagination.Item>
            </>
          ) : this.props.page <= 1 ? (
            <>
              <Pagination.Item href={"?page=" + this.props.page}>
                {this.props.page}
              </Pagination.Item>
              <Pagination.Item href={"?page=" + (this.props.page + 1)}>
                {this.props.page + 1}
              </Pagination.Item>
              <Pagination.Ellipsis disabled />
              <Pagination.Item href={"?page=" + this.props.last}>
                {this.props.last}
              </Pagination.Item>
            </>
          ) : this.props.page == 2 ? (
            <>
              <Pagination.Item href={"?page=" + 1}>{1}</Pagination.Item>

              <Pagination.Item active href={"?page=" + this.props.page}>
                {this.props.page}
              </Pagination.Item>
              <Pagination.Item href={"?page=" + (this.props.page + 1)}>
                {this.props.page + 1}
              </Pagination.Item>
              <Pagination.Ellipsis disabled />
              <Pagination.Item href={"?page=" + this.props.last}>
                {this.props.last}
              </Pagination.Item>
            </>
          ) : this.props.page < this.props.last ? (
            <>
              <Pagination.Item href={"?page=" + 1}>{1}</Pagination.Item>
              <Pagination.Ellipsis disabled />
              <Pagination.Item href={"?page=" + (this.props.page - 1)}>
                {this.props.page - 1}
              </Pagination.Item>
              <Pagination.Item active href={"?page=" + this.props.page}>
                {this.props.page}
              </Pagination.Item>
              <Pagination.Item href={"?page=" + (this.props.page + 1)}>
                {this.props.page + 1}
              </Pagination.Item>
              <Pagination.Ellipsis disabled />
              <Pagination.Item href={"?page=" + this.props.last}>
                {this.props.last}
              </Pagination.Item>
            </>
          ) : (
            <>
              <Pagination.Item href={"?page=" + 1}>{1}</Pagination.Item>
              <Pagination.Ellipsis disabled />
              {/* <Pagination.Item href={"?page=" + (this.props.last - 2)}>
                {this.props.last - 2}
              </Pagination.Item>

              <Pagination.Item href={"?page=" + (this.props.last - 1)}>
                {this.props.last - 1}
              </Pagination.Item> </>) */}
          <Pagination.Item href={"?page=" + 1}>{1}</Pagination.Item>

          {this.props.page > 1 && this.props.page + 1 < this.props.last ? (
            <>
              {this.props.page > 2 ? (
                <>
                  ...
                  <Pagination.Item href={"?page=" + (this.props.page - 1)}>
                    {this.props.page - 1}
                  </Pagination.Item>
                </>
              ) : null}
              <Pagination.Item active href={"?page=" + this.props.page}>
                {this.props.page}
              </Pagination.Item>
              {this.props.last - this.props.page > 1 ? (
                <Pagination.Item href={"?page=" + (this.props.page + 1)}>
                  {this.props.page + 1}
                </Pagination.Item>
              ) : null}
              ...
            </>
          ) : (
            <>
              <Pagination.Item href={"?page=" + (this.props.page + 1)}>
                {this.props.page + 1}
              </Pagination.Item>
              ...
            </>
          )}
          <Pagination.Item href={"?page=" + this.props.last}>
            {this.props.last}
          </Pagination.Item>
        </Pagination>
      </>
    );
  }
}

export default Pagination_;
