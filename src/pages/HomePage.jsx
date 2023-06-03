import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const HomePage = () => {
  return (
    <>
      <h1 className='text-primary text-center'>Home page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non a est unde delectus earum
        totam molestiae asperiores veritatis repellendus, obcaecati nemo ipsa repudiandae odio quod
        iure beatae deleniti. Earum, officiis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Perspiciatis repellat iusto dolores dolore porro officiis voluptatem, voluptate eaque,
        vitae quod laboriosam, est tempora praesentium voluptas reprehenderit earum distinctio nihil
        veritatis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam accusamus culpa
        ratione sed, harum voluptatum nam officia sint. Accusamus sunt mollitia animi provident
        recusandae deleniti autem officia ipsam libero repellendus. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Non a est unde delectus earum totam molestiae asperiores
        veritatis repellendus, obcaecati nemo ipsa repudiandae odio quod iure beatae deleniti.
        Earum, officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        repellat iusto dolores dolore porro officiis voluptatem, voluptate eaque, vitae quod
        laboriosam, est tempora praesentium voluptas reprehenderit earum distinctio nihil veritatis?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam accusamus culpa ratione sed,
        harum voluptatum nam officia sint. Accusamus sunt mollitia animi provident recusandae
        deleniti autem officia ipsam libero repellendus. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Non a est unde delectus earum totam molestiae asperiores veritatis
        repellendus, obcaecati nemo ipsa repudiandae odio quod iure beatae deleniti. Earum,
        officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat
        iusto dolores dolore porro officiis voluptatem, voluptate eaque, vitae quod laboriosam, est
        tempora praesentium voluptas reprehenderit earum distinctio nihil veritatis? Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Quam accusamus culpa ratione sed, harum
        voluptatum nam officia sint. Accusamus sunt mollitia animi provident recusandae deleniti
        autem officia ipsam libero repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Non a est unde delectus earum totam molestiae asperiores veritatis repellendus,
        obcaecati nemo ipsa repudiandae odio quod iure beatae deleniti. Earum, officiis? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Perspiciatis repellat iusto dolores dolore
        porro officiis voluptatem, voluptate eaque, vitae quod laboriosam, est tempora praesentium
        voluptas reprehenderit earum distinctio nihil veritatis? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Quam accusamus culpa ratione sed, harum voluptatum nam officia
        sint. Accusamus sunt mollitia animi provident recusandae deleniti autem officia ipsam libero
        repellendus.
      </p>
    </>
  );
};

export default withErrorBoundary(HomePage, {
  fallback: (
    <p
      className=' text-center p-5 rounded-3 '
      style={{
        backgroundColor: "#E893CF",
        fontWeight: 600,
        fontSize: "50px",
        color: "white",
        marginTop: "20px",
      }}
    >
      Look like this component error
    </p>
  ),
});
