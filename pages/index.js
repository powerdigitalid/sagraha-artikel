/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-slate-950">
                Pengumpul dan Transporter limbah B3
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-950">
                PT. Sagraha Satya Sawahita didirikan pada tanggal 01 Mei 2008
                beralamat pusat di Jl. Mustika Blok ZJ No.143 Ngagel Surabaya
                Jawa Timur. Perusahaan kami bergerak dalam bidang Jasa
                Pengumpulan dan Pengangkutan Limbah B3
              </p>
              <div className="mt-12">
                <Link href="/admin/dashboard" passHref>
                  <a
                    href="x"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    Selengkapnya
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/banner-1.jpg"
          alt="..."
        />
      </section>
      <section className="mt-48 md:mt-0 pb-40 relative bg-blueGray-100">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">
              Solusi Pengelolaan Limbah Medis & Farmasi Bersama Universal Eco
            </h2>
          </div>
        </div>
      </section>
      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Pengangkutan Limbah B3
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Teknologi Ramah Lingkungan
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/profile.jpg"
                      />
                    </div>
                  </Link>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Pengelolaan Limbah Medis
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/landing.jpg"
                      />
                    </div>
                  </Link>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Berita Acara Pemusnahan
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/landing.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
