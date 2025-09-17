import { IoIosSearch } from 'react-icons/io'

export const Searchbar = () => {
  return (
    <label className="w-50 md:min-w-125 rounded-2xl bg-transparent input input-neutral">
        <IoIosSearch className="text-neutral-900"/>
        <input type="text" placeholder="Search story..." className="grow" />
    </label>
  )
}
