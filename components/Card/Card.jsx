import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData, QUERY_KEY } from "../../utils/api";

const Card = () => {
  const { data } = useQuery(QUERY_KEY, fetchData)

  return (
    <div className='Card'>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default Card;
