<template>
  <div>
    <div class="views homepage__view">
      <div class="search__container">
        <div class="heading">
          <h3>looking for a job ?</h3>
        </div>
        <div class="search__criterion">
          <div class="field__jobtitle">
            <div class="icon">
              <img src="@/assets/img/binoc.svg" alt>
            </div>
            <div class="field">
              <input type="text" class="input" placeholder="job title, keyword" v-model="title">
            </div>
          </div>
          <div class="field__location">
            <div class="icon">
              <img src="@/assets/img/location.svg" alt>
            </div>
            <div class="field">
              <input type="text" class="input" placeholder="location" v-model="location">
            </div>
          </div>
          <div class="search__button">
            <button class="search" @click="execSearch">
              <img src="@/assets/img/binoc.svg" alt>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: null,
      title: null
    };
  },
  methods: {
    execSearch() {}
  }
};
</script>

<style lang="scss" scoped>
.homepage__view {
  background: url("/img/utils/homepage.png");
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .search__container {
    z-index: 1;

    .heading {
      h3 {
        color: var(--color-white);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.32);

        font-family: var(--font-Roboto);
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        font-size: 53px;
        text-align: center;
        letter-spacing: -0.02em;
      }
    }

    .search__criterion {
      display: grid;
      grid-template-columns: 1fr 1fr 100px;
      grid-template-rows: 1fr;
      grid-gap: var(--gutter);

      .field__jobtitle,
      .field__location {
        position: relative;
        width: 400px;

        .icon {
          position: absolute;
          left: 20px;
          top: 25px;
          opacity: 0.6;

          img {
            width: 35px;
          }
        }

        .field {
          .input {
            width: 100%;
            height: 80px;
            padding-right: var(--gutter);
            padding-left: 70px;
            font-family: var(--font-Roboto);
            background: var(--color-white);
            box-shadow: 0px 17px 32px rgba(0, 0, 0, 0.69);
            border-radius: 100px;
            outline: none;
            border: 0;
            font-size: 26px;
            font-weight: 100;
            transition: all 0.3s ease-in-out;

            &:focus {
              box-shadow: 0px 17px 45px rgba(0, 0, 0, 1);
            }
          }
        }
      }

      .field__location {
        .icon {
          position: absolute;
          left: 20px;
          top: 20px;
          opacity: 0.6;

          img {
            width: 35px;
          }
        }
      }

      .search__button {
        .search {
          width: 80px;
          height: 80px;
          font-family: var(--font-Roboto);
          background: var(--color-yellow);
          box-shadow: 0px 4px 16px rgba(255, 228, 0, 0.73);
          border-radius: 100px;
          outline: none;
          border: 0;
          transition: all 0.3s ease-in-out;

          &:hover {
            box-shadow: 0px 4px 25px rgba(255, 228, 0, 0.8);

            img {
              transform: scale(1.05);
            }
          }

          img {
            width: 30px;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .homepage__view {
    .search__container {
      .search__criterion {
        grid-template-columns: 1fr;

        .search__button {
          z-index: 5;

          .search {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .homepage__view {
    --width: 320px;
    --height: 60px;

    .search__container {
      .heading {
        h3 {
          font-size: 35px;
        }
      }

      .search__criterion {
        grid-gap: 10px;

        .field__jobtitle,
        .field__location {
          width: var(--width);
          margin: 0 auto;

          .icon {
            top: 16px;

            img {
              width: 25px;
            }
          }

          .field {
            .input {
              height: var(--height);
              font-size: 20px;
            }
          }
        }

        .search__button {
          margin: 0 auto;

          .search {
            width: var(--width);
            height: var(--height);
          }
        }
      }
    }
  }
}
</style>
