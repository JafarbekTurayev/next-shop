import Navigation from "../components/Navigation";
import React from "react";
import {baza} from "./utils/baza";
import Link from "next/link";
import {productsByCategory} from "./utils/bazaByCategory";

const Index = (categories) => {


    return (
        <div>

            <Navigation/>
            <h1>Home Page</h1>
            <p className="bg-success"></p>
            {console.log(categories)}
            {categories.categories.map((item, i) => {
                return <div key={i}>
                    <Link href={
                        {
                            pathname: "/category/[name]",
                            query: {
                                name: item
                            }
                        }
                    }><p>{item}</p></Link>
                </div>
            })
            }

        </div>
    );
};

export default Index;

export async function getStaticProps() {
    const categories = baza.reduce((arr, next) => {
        console.log(next)
        next.categories.map(category => {
            if (arr.includes(category)) return
            arr.push(category)
        })
        return arr
    }, [])
    return {
        props: {
            categories: categories
        }
    }
}



