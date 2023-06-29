"use client";
import React, { useState,useId } from "react";
import style from "./Content.module.css";
import Link from "next/link";
import Image from "next/image";
import { contributors, podcastsData, users } from "@/mockdata";
import Diamond from "../widgets/Diamond";

const Content = () => {
  const [userList, setUserList] = useState(users);
  const [podCast,setPodcast]=useState(podcastsData);
  const key=useId();

  return (
    <section className={style.container}>
      <article class={style.articleContainer}>
        <div className="">
        <h2 className={style.articleHeading}>Notes</h2>
        <p className="mt-4 text-base text-[#64748B] leading-6">In this episode,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="mt-8">
        <h3 className={style.articleSubHeading}>Topics</h3>
        <ul className="mt-4">
          {podCast.map(item=><li className="flex items-center mb-2.5 text-base font-medium" key={key}>
            <p className="text-[#64748B] leading-6">
            <span className={style.podCastTimeStamp}>{item.timeStamp}</span>
              {item.content}
            </p>
          </li>)}
        </ul>
        </div>

        <div className="mt-8">
        <h3 className={style.articleSubHeading}>Contributors</h3>
        <ul className="mt-4">
          {contributors.map(item=><li className="flex items-start mb-2.5 text-base font-medium" key={key}>
            <span className="text-[#64748B] mr-1">—</span>
            <p className="text-[#64748B] leading-6">
            <span className={`${style.contributorName}`}>{item.name}</span>
              {item.about}
              </p>
          </li>)}
        </ul>
        </div>

        <div className="mt-[38px]">
          <p className="text-base text-[#64748B] italic">
          If you liked this episode, popularised in the with the release of letraset sheets containing passages, and more recently with desktop  
          <span className="text-[#1E293B]"> @PublishingSoftware.</span>
          </p>
        </div>
      </article>

      <div class={style.guestContainer}>
        <div className="relative py-3">
          <span className="absolute top-[-12px] left-[50%]"><Diamond /></span>
          <span className="absolute right-[30%]"><Diamond /></span>
        </div>
        <aside className={style.guestSection}>
          <h3 className="text-base font-extrabold leading-6">Hosts & Guests</h3>
          <div className="flex justify-start items-center mt-[4]">
            <ul className="p-0 m-0">
              {userList.map((user) => (
                <li
                  className="flex items-center py-2 cursor-pointer"
                  key={key}
                >
                  <Link href="/">
                    <div
                      classN
                      ame="h-[45px] w-[45px] bg-white overflow-hidden"
                    >
                      <Image
                        src={user.image}
                        alt={user.name}
                        className="w-full h-[45px] w-[45px] object-fit"
                      />
                    </div>
                  </Link>
                  <div className="ml-3">
                    <p className="text-sm font-bold">{user.name}</p>
                    <p className="text-sm font-semibold text-[#3B82F6]">
                      {user.userid}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Content;
