<template>
  <div class="body__container job-single__view">
    <transition name="fade" mode="out-in">
      <LoaderComponent v-if="loading"/>
      <div v-else>
        <section class="job__single">
          <div class="container__fw">
            <div class="job__sidebar">
              <!-- JOB -->
              <div class="job__block">
                <div class="block__content">
                  <div class="body__content job__details__logo">
                    <div class="job__details">
                      <h2 v-if="jobData.job.name">{{jobData.job.name}}</h2>

                      <div class="row-1">
                        <div class="data__cell">
                          <label>Type</label>
                          <div class="data__content" v-if="jobData.job.type">{{jobData.job.type}}</div>
                        </div>
                        <div class="data__cell">
                          <label>Pay (Monthly)</label>
                          <div class="data__content" v-if="jobData.job.pay">{{jobData.job.pay}}</div>
                        </div>
                        <div class="data__cell">
                          <label>Seniority Level</label>
                          <div
                            class="data__content"
                            v-if="jobData.job.seniority_level"
                          >{{jobData.job.seniority_level}}</div>
                        </div>
                        <div class="data__cell">
                          <label>Job Functions</label>
                          <div
                            class="data__content"
                            v-if="jobData.job.functions"
                          >{{jobData.job.functions}}</div>
                        </div>
                        <div class="data__cell">
                          <label>Start</label>
                          <div
                            class="data__content"
                            v-if="jobData.job.startDesc"
                          >{{jobData.job.startDesc}}</div>
                        </div>
                        <div class="data__cell">
                          <label>Duration</label>
                          <div
                            class="data__content"
                            v-if="jobData.job.durationDesc"
                          >{{jobData.job.durationDesc}}</div>
                        </div>
                      </div>

                      <div class="row-2">
                        <div class="tags white__bg">
                          <ul v-if="jobData.tags">
                            <li v-for="(tag, index) in jobData.tags" :key="index">
                              <router-link
                                class="tag"
                                :to="{ name: 'jobs', query: {tag: tag.url}}"
                              >{{tag.name}}</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="company__logo" v-if="jobData.company">
                      <router-link
                        class="logo"
                        :to="{name: 'companySingle', params: { id: jobData.company.id}}"
                      >
                        <img :src="'/img/jobs/companies/' + jobData.company.logo" alt>
                      </router-link>
                    </div>
                  </div>
                </div>

                <div class="block__content">
                  <h3>Description</h3>
                  <div
                    class="body__content styled__content"
                    v-if="jobData.job.jobDesc"
                    v-html="jobData.job.jobDesc"
                  ></div>
                </div>

                <div class="block__content">
                  <h3>Responsibilities</h3>
                  <div
                    class="body__content styled__content"
                    v-if="jobData.job.responsibilities"
                    v-html="jobData.job.responsibilities"
                  ></div>
                </div>

                <div class="block__content">
                  <h3>Requirements</h3>
                  <div
                    class="body__content styled__content"
                    v-if="jobData.job.requirements"
                    v-html="jobData.job.requirements"
                  ></div>
                </div>

                <div class="block__content">
                  <h3>Benefits</h3>
                  <div
                    class="body__content styled__content"
                    v-if="jobData.job.benefits"
                    v-html="jobData.job.benefits"
                  ></div>
                </div>

                <div class="block__content" v-if="jobData.job.applyOnUrl === false">
                  <h3>Apply for this job</h3>
                  <form @submit.prevent="validateJobApplication" autocomplete="off">
                    <div class="body__content apply__grid__layout">
                      <InputText
                        label="First Name"
                        name="firstName"
                        v-model="applicationData.firstName"
                        v-validate="'required'"
                        :message="errors.first('firstName')"
                      />
                      <InputText
                        label="Last Name"
                        name="lastName"
                        v-model="applicationData.lastName"
                        v-validate="'required'"
                        :message="errors.first('lastName')"
                      />

                      <InputTel
                        label="Telephone number"
                        name="telephone"
                        v-model="applicationData.telephone"
                        v-validate="'required|numeric|min:7'"
                        :message="errors.first('telephone')"
                      />

                      <InputTel
                        label="Mobile number"
                        name="mobile"
                        v-model="applicationData.mobile"
                        v-validate="'required|numeric|min:7'"
                        :message="errors.first('mobile')"
                      />

                      <InputTextarea
                        label="Residential address"
                        :full="true"
                        name="address"
                        v-model="applicationData.address"
                        v-validate="'required'"
                        :message="errors.first('address')"
                      />

                      <InputNumeric
                        label="Postal Code"
                        name="postalcode"
                        v-model="applicationData.postal_code"
                        v-validate="'required|numeric'"
                        :message="errors.first('postalcode')"
                      />

                      <InputSelect
                        label="Country"
                        name="country"
                        v-model="applicationData.country"
                        :values="countries"
                        optionValue="name"
                        optionText="name"
                        v-validate="'required'"
                        :message="errors.first('country')"
                      />

                      <InputSelect
                        label="Nationality"
                        name="nationality"
                        v-model="applicationData.nationality"
                        :values="nationality"
                        optionValue="nationality"
                        optionText="nationality"
                        v-validate="'required'"
                        :message="errors.first('nationality')"
                      />

                      <InputEmail
                        label="Email"
                        name="email"
                        v-model="applicationData.email"
                        v-validate="'required|email'"
                        :message="errors.first('email')"
                      />

                      <InputEditor
                        label="Cover Letter"
                        name="coverLetter"
                        :full="true"
                        v-model="applicationData.cover_letter"
                        v-validate="'required'"
                        :message="errors.first('coverLetter')"
                      />

                      <!-- CV upload -->
                      <div :class="['input__block', 'full']">
                        <label>Upload your curriculum vitae (.doc, .docx, .pdf or .rtf )</label>

                        <div class="upload__options">
                          <div class="upload__cv__button">
                            <input
                              id="cv_upload"
                              type="file"
                              ref="cv_upload"
                              @change="handleCVUpload()"
                            >
                            <label
                              for="cv_upload"
                              class="upload__pc__button button__global blue override__visbility not__block"
                            >
                              <img src="@/assets/img/pc.svg" class="icon">
                              <span class="text">From Device</span>
                            </label>
                          </div>

                          <button
                            type="button"
                            class="upload__pc__button button__global blue override__visbility"
                          >
                            <img src="@/assets/img/drive.svg" class="icon">
                            <span class="text">Google Drive</span>
                          </button>

                          <button
                            type="button"
                            class="upload__pc__button button__global blue override__visbility"
                          >
                            <img src="@/assets/img/dropbox.svg" class="icon">
                            <span class="text">Dropbox</span>
                          </button>
                        </div>

                        <div class="file__name" v-if="CVInformation.fileName !== null">
                          File name:
                          <span>{{CVInformation.fileName}}</span>
                        </div>

                        <div class="upload__in__progress" v-if="CVUploadStatus.uploading">
                          <div class="icon">
                            <div class="loading"></div>
                          </div>
                          <div class="text">Upload in progress</div>
                        </div>

                        <div
                          :class="['input__block', 'full', 'response__message', 'error__upload__wrapper']"
                          v-if="this.CVUploadStatus.error"
                        >
                          <div class="icon__wrapper">
                            <div class="icon">
                              <img src="@/assets/img/error_white.svg" alt>
                            </div>
                          </div>
                          <div class="message">
                            <h4>Upload Error</h4>
                            <p>{{this.CVUploadStatus.error}}</p>
                          </div>
                        </div>
                      </div>
                      <!-- CV upload -->
                      <div :class="['input__block', 'full']">
                        <div class="checkbox__styled border__top">
                          <div class="checkbox__accept">
                            <input
                              type="checkbox"
                              required
                              id="accept__job__conditions"
                              v-model="applicationData.agree"
                            >
                            <label for="accept__job__conditions">
                              <span></span>
                            </label>
                          </div>
                          <label
                            class="checkbox__text"
                            for="accept__job__conditions"
                          >I accept that my data is being transmitted etc..</label>
                        </div>
                      </div>

                      <div :class="['input__block', 'full', 'submit__buttons']">
                        <button
                          type="button"
                          class="submit__application__button button__global green override__visbility"
                          @click="validateJobApplication()"
                          :disabled="applicationData.agree === false"
                        >
                          <div class="icon">
                            <div class="loading"></div>
                          </div>
                          <span class="text">Submit Application</span>
                        </button>

                        <button
                          type="reset"
                          class="reset__application__button button__global yellow override__visbility"
                          @click="resetForm()"
                        >
                          <span class="text">Reset</span>
                        </button>
                      </div>

                      <div
                        :class="['input__block', 'full', 'response__message', 'success']"
                        v-if="submitStatus.success"
                      >
                        <div class="icon__wrapper">
                          <div class="icon">
                            <img src="@/assets/img/success.svg" alt>
                          </div>
                        </div>
                        <div class="message">
                          <h4>Success !</h4>
                          <p>Your application has been sent !</p>
                        </div>
                      </div>

                      <div
                        :class="['input__block', 'full', 'response__message', 'error']"
                        v-if="submitStatus.error"
                      >
                        <div class="icon__wrapper">
                          <div class="icon">
                            <img src="@/assets/img/error_white.svg" alt>
                          </div>
                        </div>
                        <div class="message">
                          <h4>Error !</h4>
                          <p>There is an error in your application</p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="block__content" v-if="jobData.job.applyOnUrl === true">
                  <h3>Apply for this job</h3>
                  <div class="body__content">
                    <a
                      :href="jobData.job.applyUrl"
                      class="submit__job__button button__global blue override__visbility"
                    >
                      <img class="icon" src="@/assets/img/external-link-light.svg" alt>
                      <div class="text">Apply on website</div>
                    </a>
                  </div>
                </div>
              </div>
              <!-- JOB -->
              <!-- SIDEBAR -->
              <div class="sidebar__block">
                <div class="block__content">
                  <h3>Tech Stack</h3>
                  <div class="body__content">
                    <div class="tech__stack__icons">
                      <div
                        class="tech__block"
                        v-for="(tech, index) in jobData.tech_stack"
                        :key="index"
                      >
                        <img :src="'/img/techstack/' + tech.logo" class="icon">
                        <div class="text">{{tech.text}}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <RecentJobs :notIncludeId="jobData.id"/>

                <!-- Social -->
                <h2>Share this opening</h2>
                <SocialSharingComponent :url="url" :title="jobData.job.name"/>
                <!-- Social -->
              </div>
              <!-- SIDEBAR -->
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>


<script>
import SocialSharingComponent from "@/components/shared/SocialSharingComponent";
import JobBlock from "@/components/jobs/JobBlock";
import { mapGetters } from "vuex";
import LoaderComponent from "@/components/shared/LoaderComponent";
import { VueEditor } from "vue2-editor";
import ButtonComponent from "@/components/shared/ButtonComponent";
import RecentJobs from "@/components/jobs/RecentJobs.vue";

import InputText from "@/components/forms/InputText";
import InputTel from "@/components/forms/InputTel";
import InputTextarea from "@/components/forms/InputTextarea";
import InputEmail from "@/components/forms/InputEmail";
import InputEditor from "@/components/forms/InputEditor";
import InputNumeric from "@/components/forms/InputNumeric";
import InputSelect from "@/components/forms/InputSelect";

import countries from "@/components/forms/countries.js";
import nationality from "@/components/forms/nationality.js";

function convertFileToBinary(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      let array = new Uint8Array(reader.result);
      resolve(array);
    };
    reader.onerror = error => reject(error);
  });
}

export default {
  components: {
    SocialSharingComponent,
    JobBlock,
    LoaderComponent,
    InputText,
    InputTel,
    InputTextarea,
    InputEmail,
    InputEditor,
    InputNumeric,
    InputSelect,
    RecentJobs
  },
  computed: {
    ...mapGetters({
      getJobById: "jobs/getJobById"
    }),
    getJobData() {
      return this.getJobById(this.jobId);
    }
  },
  data: () => ({
    jobData: {},
    url: null,
    jobId: null,
    loading: true,
    submitStatus: {
      error: false,
      success: false
    },
    CVInformation: {
      fileName: null
    },
    CVUploadStatus: {
      success: false,
      error: null,
      uploading: false
    },
    applicationData: {
      firstName: null,
      lastName: null,
      telephone: null,
      mobile: null,
      address: null,
      postal_code: null,
      country: null,
      nationality: null,
      email: null,
      cover_letter: null,
      agree: false
    },
    nationality: nationality,
    countries: countries
  }),
  beforeMount() {
    this.jobId = this.$route.params.id;
    this.url = window.location.href;

    //Get company data
    this.fetchJobData();
  },
  methods: {
    fetchJobData() {
      if (typeof this.getJobData === "undefined") {
        // FYR https://stackoverflow.com/questions/40165766/returning-promises-from-vuex-actions
        this.$store
          .dispatch("jobs/getJobFromApi", {
            value: this.$route.params.id
          })
          .then(
            response => {
              console.log(
                "Got some data, now lets show something in this component"
              );

              this.JobData = response; // TBC
            },
            error => {
              console.error(
                "Got nothing from server. Prompt user to check internet connection and try again"
              );
            }
          );
      } else {
        this.jobData = this.getJobData;
        //Set loading status
        this.loading = false;
      }
    },
    validateJobApplication() {
      // TODO: Check if file has been uploaded

      this.$validator.validateAll().then(result => {
        if (result) {
          alert("TODO: send data");

          // TODO: send data

          console.log(this.applicationData);

          // Set submit status
          this.submitStatus.success = true;
          return;
        }

        alert("Correct the errors!");
        this.submitStatus.error = true;
      });
    },
    handleCVUpload(file) {
      console.log("file upload triggered");

      // Resets alerts
      this.CVUploadStatus.error = null;
      this.CVUploadStatus.success = false;

      console.log(this.$refs);

      convertFileToBinary(this.$refs.cv_upload.files[0])
        .then(data => {
          // fileName is file upload name
          let fileName = this.$refs.cv_upload.files[0].name;
          let fileSize = this.$refs.cv_upload.files[0].size;
          let fileType = this.$refs.cv_upload.files[0].type;

          // Set filename
          this.CVInformation.fileName = fileName;
          this.CVInformation.fileSize = fileSize;

          // Data contains file data
          console.log(data);
          console.log(fileName);
          console.log(fileSize);
          console.log(fileType);

          let allowedUploadSize = 5242880;
          let allowedTypes = ["application/pdf"];

          if (!allowedTypes.includes(fileType)) {
            this.CVUploadStatus.error = "Incorrect file type.";
            return;
          }

          if (fileSize > allowedUploadSize) {
            this.CVUploadStatus.error = "File size is above 5 Mb.";
            return;
          }

          // TODO: Upload goes here and set status to true below
          if (fileSize < allowedUploadSize && allowedTypes.includes(fileType)) {
            // Set uploading information true
            this.CVUploadStatus.uploading = true;

            // TODO upload logic here
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    resetForm() {
      this.CVUploadStatus.error = null;
      this.CVUploadStatus.success = false;
      this.CVUploadStatus.uploading = false;

      this.submitStatus.error = false;
      this.submitStatus.success = false;
      this.CVInformation.fileName = null;

      this.applicationData = {
        firstName: null,
        lastName: null,
        telephone: null,
        mobile: null,
        address: null,
        postal_code: null,
        country: null,
        nationality: null,
        email: null,
        cover_letter: null,
        agree: false
      };
    }
  },
  watch: {
    getCompanyById: {
      handler(val) {
        this.fetchJobData();
      },
      deep: true,
      immediate: true
    }
  },
  metaInfo() {
    let title =
      this.jobData && this.jobData.job && this.jobData.job.name
        ? this.jobData.job.name
        : "";
    return {
      title: title
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  color: var(--site-text-color);
}

.job__single {
  .job__sidebar {
    display: grid;
    grid-template-columns: 1fr 0.4fr;
    grid-column-gap: var(--gutter);
  }
}

.job__details__logo {
  display: grid;
  grid-template-columns: 2fr 0.8fr;

  .job__details {
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: normal;
      margin-top: 0;
      color: var(--site-text-color);
    }

    label {
      color: var(--color-dark);
      text-transform: uppercase;
      font-weight: 900;
      font-size: 11px;
      margin-bottom: 5px;
    }

    .data__content {
      font-family: var(--font-Roboto);
      font-weight: 300;
    }

    .row-1 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: calc(var(--gutter) * 2);
      grid-gap: 10px;
    }
  }

  .company__logo {
    .logo {
      text-align: center;
      display: block;

      img {
        width: 80%;
      }
    }
  }
}

.apply__grid__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--gutter);
}

.upload__options {
  button {
    margin-right: calc(var(--gutter) / 2);
  }

  .upload__cv__button {
    display: inline-flex;
    margin-right: 10px;

    input[type="file"] {
      display: none;
    }
  }
}

.file__name {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  text-transform: uppercase;
  color: var(--color-dark);
  display: block;
  margin-bottom: 5px;
  margin-top: var(--gutter);

  span {
    text-transform: initial;
    font-weight: 300;
  }
}

.upload__in__progress {
  display: flex;
  align-items: center;
  margin-bottom: var(--gutter);

  .icon {
    margin-right: 10px;

    .loading {
      display: block;
      margin: 0;
      font-size: 10px;
      position: relative;
      text-indent: -9999em;
      border-top: 5px solid rgba(0, 0, 0, 0.2);
      border-right: 5px solid rgba(0, 0, 0, 0.2);
      border-bottom: 5px solid rgba(0, 0, 0, 0.2);
      border-left: 5px solid var(--color-blue);
      transform: translateZ(0);
      animation: in-progress-loader 0.5s infinite linear;
    }

    .loading {
      &,
      &:after {
        border-radius: 50%;
        width: 20px;
        height: 20px;
      }
    }
  }

  .text {
    font-weight: 300;
  }
}

.submit__buttons {
  .submit__application__button {
    margin-right: 10px;
  }
}

.tech__stack__icons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-row-gap: var(--gutter);

  .tech__block {
    text-align: center;

    .text {
      color: var(--color-light);
    }
  }
}

@media (max-width: 1024px) {
  .job__single {
    .job__sidebar {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 768px) {
}

@media (max-width: 600px) {
  .job__details__logo {
    display: grid;
    grid-template-columns: 2fr 0.5fr;

    .job__details {
      h2 {
        font-size: 27px;
      }

      .row-1 {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  .upload__options {
    .upload__cv__button {
      width: 100%;
      margin-right: 0;
      margin-bottom: 5px;
    }

    button {
      margin-right: 0;
      width: 100%;
      margin-bottom: 10px;
    }

    .upload__pc__button {
      width: 100%;
    }
  }
}

@media (max-width: 450px) {
  .job__details__logo {
    .job__details {
      h2 {
        font-size: 23px;
      }

      .row-1 {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>

