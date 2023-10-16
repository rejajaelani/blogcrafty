import React from "react";
import BadgePost from "./BadgePost";

export default function BoxContent() {
    return (
        <>
            <div className="p-11 bg-white text-black rounded-xl border-solid border-2 border-black flex gap-3 items-center">
                <div
                    className="rounded-xl border-solid border-2 border-black"
                    style={{
                        width: "20vw",
                        height: "290px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <img
                        style={{
                            width: "auto",
                            maxWidth: "1000px",
                            height: "100%",
                        }}
                        src="https://demos.themeansar.com/blogarise/lite/wp-content/uploads/2020/03/blog11.webp"
                        alt="Post Featured Image"
                    />
                </div>
                <div style={{ width: "25vw" }}>
                    <BadgePost label="Food" route="login" />
                    <BadgePost label="Fashion" route="login" />
                    <span className="text-3xl font-bold block">
                        Most overrate Kindness Greatest be Oh Staking laughter
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam excepturi inventore quisquam rerum hic, et placeat
                    sapiente enim earum explicabo! Libero tenetur at tempora
                    obcaecati, iusto laudantium totam nostrum esse.
                </div>
            </div>
        </>
    );
}
