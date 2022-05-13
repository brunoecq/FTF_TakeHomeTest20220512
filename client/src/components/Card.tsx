import { IData } from '../types'
import { FC } from 'react'

interface CardProps {
  item: IData,
  index: number
}

const Card: FC<CardProps> = ({ item, index }): JSX.Element => {
  return (
  <div className="flex justify-center">
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-lg w-full">
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{index+1}. {item.sha}</h5>
      <p className="text-gray-700 text-base mb-4">
        { item.commit.message }
      </p>
      <div className="flex items-center  border-t border-gray-300 text-gray-600">
        <img className="w-10 h-10 rounded-full mr-4" src={item.author.avatar_url} alt={ item.commit.author.name } />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{ item.commit.author.name }</p>
          <p className="text-gray-600">https://github.com/{item.commit.author.name}</p>
        </div>
      </div>
    </div>
  </div>
    
    )
  ;
};

export default Card;
