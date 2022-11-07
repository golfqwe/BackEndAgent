<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div
            class="page-title-box d-sm-flex align-items-center
                    justify-content-between"
          >
            <h4 class="mb-sm-0">
              Add new agent
            </h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a
                    href="javascript:
                                    void(0);"
                  >Member</a>
                </li>
                <li class="breadcrumb-item active">
                  Add new agent
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- end page title -->

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">
                Follow a step by step to add
                new agent
              </h4>

              <div id="progrss-wizard" class="twitter-bs-wizard">
                <ul class="twitter-bs-wizard-nav nav-justified">
                  <li class="nav-item">
                    <a href="#progress-information-details" class="nav-link" data-toggle="tab">
                      <span class="step-number">01</span>
                      <span class="step-title">Information</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#progress-sport" class="nav-link" data-toggle="tab">
                      <span class="step-number">02</span>
                      <span class="step-title">Sport</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#progress-live-casino" class="nav-link" data-toggle="tab">
                      <span class="step-number">03</span>
                      <span class="step-title">Live casino</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#progress-slot" class="nav-link" data-toggle="tab">
                      <span class="step-number">04</span>
                      <span class="step-title">Slot</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#progress-lottery" class="nav-link" data-toggle="tab">
                      <span class="step-number">05</span>
                      <span class="step-title">Lottery</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#progress-game" class="nav-link" data-toggle="tab">
                      <span class="step-number">06</span>
                      <span class="step-title">Games</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#progress-poker" class="nav-link" data-toggle="tab">
                      <span class="step-number">07</span>
                      <span class="step-title">Poker</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#progress-keno" class="nav-link" data-toggle="tab">
                      <span class="step-number">08</span>
                      <span class="step-title">Keno</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#progress-Esport" class="nav-link" data-toggle="tab">
                      <span class="step-number">09</span>
                      <span class="step-title">E-Sport</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#progress-confirm-detail" class="nav-link" data-toggle="tab">
                      <span class="step-number">10</span>
                      <span class="step-title">Confirm</span>
                    </a>
                  </li>
                </ul>

                <div id="bar" class="progress mt-4">
                  <div
                    class="progress-bar bg-success
                                    progress-bar-striped progress-bar-animated"
                  />
                </div>
                <div
                  class="tab-content
                                twitter-bs-wizard-tab-content"
                >
                  <div id="progress-information-details" class="tab-pane">
                    <form>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-firstname-input"
                            >Username</label>
                            <input
                              id="progress-basicpill-firstname-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-lastname-input"
                            >Password</label>
                            <input
                              id="progress-basicpill-lastname-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-lastname-input"
                            >Re-enter
                              Password</label>
                            <input
                              id="progress-basicpill-lastname-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-lastname-input"
                            >credit
                              limited</label>
                            <input
                              id="progress-basicpill-lastname-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-lastname-input"
                            >Currency</label>
                            <input
                              id="progress-basicpill-lastname-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-lastname-input"
                            >GA</label>
                            <br>
                            <button
                              type="button"
                              class="btn
                                                        btn-outline-danger
                                                        waves-effect
                                                        waves-light"
                            >
                              Reset
                            </button>
                            <button
                              type="button"
                              class="btn
                                                        btn-outline-danger
                                                        waves-effect
                                                        waves-light"
                            >
                              Reset all
                            </button>
                            <button
                              type="button"
                              class="btn btn-success
                                                        waves-effect
                                                        waves-light"
                            >
                              <i
                                class="ri-check-line
                                                            align-middle me-2"
                              />
                              Verified member
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-phoneno-input"
                            >Name</label>
                            <input
                              id="progress-basicpill-phoneno-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-phoneno-input"
                            >Date
                              of Birth</label>
                            <input
                              id="example-date-input"
                              class="form-control"
                              type="date"
                              value="2011-08-19"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-phoneno-input"
                            >email</label>
                            <input
                              id="progress-basicpill-phoneno-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-phoneno-input"
                            >mobile</label>
                            <input
                              id="progress-basicpill-phoneno-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-phoneno-input"
                            >extra
                              1</label>
                            <input
                              id="progress-basicpill-phoneno-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="progress-basicpill-phoneno-input"
                            >extra
                              2</label>
                            <input
                              id="progress-basicpill-phoneno-input"
                              type="text"
                              class="form-control"
                            >
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="mb-3">
                              <label class="form-label" for="basicpill-address-input">time
                                zone</label>
                              <textarea
                                id="basicpill-address-input"
                                class="form-control"
                                rows="2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div id="progress-sport" class="tab-pane">
                    <div>
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Betting
                                  information
                                </h4>
                                <p class="card-title-desc">
                                  Sport
                                </p>
                                <div class="col-xl-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <h4
                                        class="card-title
                                                                            mb-4"
                                      >
                                        Setting
                                        sport
                                        part
                                      </h4>
                                      <input
                                        id="switch3"
                                        type="checkbox"
                                        switch="bool"
                                        checked
                                      >
                                      <label
                                        for="switch3"
                                        data-on-label="Enable"
                                        data-off-label="Disable"
                                      />
                                      <div class="row">
                                        <div class="col-md-5">
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                M-sport
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                S-sport
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                IA
                                                E-sport
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Maxbet
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Sbobet
                                              </label>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  ASIA
                                                  365
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  SABA
                                                  SPORT
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  BTI
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="col-md-6
                                                                                ms-auto"
                                        >
                                          <div
                                            class="mt-4
                                                                                    mt-lg-0"
                                          >
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  SBO
                                                  virtual
                                                  sport
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Muaystep2
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  IBC
                                                  Sport
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  SSPORTLCS
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  BBN*newbb
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  BBN
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  SBOBET
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  OB
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <form>
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <div class="mb-3">
                                        <i class="ri-question-fill" />
                                        <label class="form-label">Min
                                          per
                                          bet</label>
                                        <span
                                          style="color:red;font-weight:bold"
                                        >(Min:20)</span>
                                        <input
                                          id="progress-basicpill-lastname-input"
                                          type="text"
                                          class="form-control"
                                        >
                                      </div>
                                      <div>
                                        <i class="ri-question-fill" />
                                        <label class="form-label">Max
                                          per
                                          bet</label>
                                        <span
                                          style="color:red;font-weight:bold"
                                        >(Max:200,000)</span>
                                        <input
                                          id="progress-basicpill-lastname-input"
                                          type="text"
                                          class="form-control"
                                        >
                                      </div>
                                    </div>

                                    <div class="col-lg-6">
                                      <div class="mb-0">
                                        <i class="ri-question-fill" />
                                        <label class="form-label">Max
                                          per
                                          Match</label>
                                        <span
                                          style="color:red;font-weight:bold"
                                        >(Max:200,000)</span>
                                        <input
                                          id="progress-basicpill-lastname-input"
                                          type="text"
                                          class="form-control"
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <!-- end select2 -->
                          </div>
                        </div>
                        <!-- end row -->

                        <!-- end row -->

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  S-Sport,
                                  Maxbet
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  taking
                                </p>

                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">My
                                        share
                                        (HDP/OU/O/E)</label><span
                                          style="color:red;font-weight:bold"
                                        >(0%-83%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">My
                                      share
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">My
                                      share
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      Position
                                      Share
                                      (HDP/OU/O/E)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      Position
                                      Share
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      Position
                                      Share
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shard
                                      Forced
                                      (HDP/OU/O/E)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shard
                                      Forced
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shard
                                      Forced
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      Remaining
                                      (HDP/OU/O/E)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      Remaining
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      Remaining
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  S-Sport,
                                  Maxbet
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      4
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 4
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>

                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      A
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 5
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>

                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      B
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 7
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      C
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 9
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0.25%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      D
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      11 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      E
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      13 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0.4%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      F
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      15 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0.65%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      G
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      17 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(1%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission(1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(1%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission(Parlay/CS/TG)</label><span
                                        style="color:red;font-weight:bold"
                                      >(1%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div> <!-- end row -->

                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  S-Sport,
                                  Maxbet
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <div class="row">
                                  <div class="col-lg-6">
                                    <div>
                                      <div class="mb-4">
                                        <label class="form-label">3
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">4
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">5
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">6
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">7
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">8
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-lg-6">
                                    <div
                                      class="mt-4
                                                                        mt-lg-0"
                                    >
                                      <div class="mb-4">
                                        <label class="form-label">9
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">10
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">11
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">12
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">13
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">14
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">15
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  SBO
                                  Virtual Sport
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  taking
                                </p>

                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">My
                                        share
                                        (HDP/OU/O/E)</label><span
                                          style="color:red;font-weight:bold"
                                        >(0%-83%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">My
                                      share
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">My
                                      share
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      Position
                                      Share
                                      (HDP/OU/O/E)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      Position
                                      Share
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      Position
                                      Share
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shard
                                      Forced
                                      (HDP/OU/O/E)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shard
                                      Forced
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shard
                                      Forced
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      Remaining
                                      (HDP/OU/O/E)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      Remaining
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      Remaining
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  SBO
                                  Virtual Sport
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      4
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 4
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>

                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      A
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 5
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>

                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      B
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 7
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      C
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 9
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0.25%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      D
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      11 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      E
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      13 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0.4%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      F
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      15 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0.65%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      G
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      17 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(1%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission(1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(1%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission(Parlay/CS/TG)</label><span
                                        style="color:red;font-weight:bold"
                                      >(1%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  IA
                                  E-SPORT,
                                  MUAYSTEP2
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  taking
                                </p>

                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">My
                                        share
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      position
                                      share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shared
                                      forced</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  IA
                                  E-SPORT,
                                  MUAYSTEP2
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  IA
                                  E-SPORT,
                                  MUAYSTEP2
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  taking
                                </p>

                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">My
                                        share
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      position
                                      share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shared
                                      forced</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  SSPORTLCS
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  M-SPORT
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  taking
                                </p>

                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">My
                                        share
                                        (HDP/OU/O/E)</label><span
                                          style="color:red;font-weight:bold"
                                        >(0%-83%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">My
                                      share
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">My
                                      share
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      Position
                                      Share
                                      (HDP/OU/O/E)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      Position
                                      Share
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Downline
                                      Position
                                      Share
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shard
                                      Forced
                                      (HDP/OU/O/E)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shard
                                      Forced
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Shard
                                      Forced
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      Remaining
                                      (HDP/OU/O/E)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      Remaining
                                      (1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Take
                                      up
                                      Remaining
                                      (Parlay/Other)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  M-SPORT
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      4
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 4
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>

                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      A
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 5
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>

                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      B
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 7
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      C
                                      (HDP/OU/O/E,
                                      Best
                                      Spread 9
                                      %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0.25%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      D
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      11 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      E
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      13 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0.4%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      F
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      15 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(0.65%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission
                                      G
                                      (HDP/OU/O/E,
                                      Best
                                      Spread
                                      17 %)</label><span
                                        style="color:red;font-weight:bold"
                                      >(1%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission(1x2/Outright/DC)</label><span
                                        style="color:red;font-weight:bold"
                                      >(1%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Member
                                      Commission(Parlay/CS/TG)</label><span
                                        style="color:red;font-weight:bold"
                                      >(1%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="55"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  M-SPORT
                                </h4>
                                <p class="card-title-desc">
                                  Step
                                  Commission
                                </p>
                                <div class="row">
                                  <div class="col-lg-6">
                                    <div>
                                      <div class="mb-4">
                                        <label class="form-label">3
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">4
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">5
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">6
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">7
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">8
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-lg-6">
                                    <div
                                      class="mt-4
                                                                        mt-lg-0"
                                    >
                                      <div class="mb-4">
                                        <label class="form-label">9
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">10
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">11
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">12
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">13
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">14
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                      <div class="mb-4">
                                        <label class="form-label">15
                                          match</label><span
                                            style="color:red;font-weight:bold"
                                          >(1%)</span>
                                        <input
                                          id="demo1"
                                          type="text"
                                          value="0"
                                          name="demo1"
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="progress-live-casino" class="tab-pane">
                    <div>
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Betting
                                  information
                                </h4>
                                <p class="card-title-desc">
                                  Live
                                  Casino
                                </p>
                                <div class="col-xl-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <h4
                                        class="card-title
                                                                            mb-4"
                                      >
                                        Setting
                                        live
                                        casino
                                        part
                                      </h4>
                                      <input
                                        id="switch4"
                                        type="checkbox"
                                        switch="bool"
                                        checked
                                      >
                                      <label
                                        for="switch4"
                                        data-on-label="Enable"
                                        data-off-label="Disable"
                                      />
                                      <div class="row">
                                        <div class="col-md-5">
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                EZUGI
                                                Casino
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                ALLBet
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                AG
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                CorkFight
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                LuckyStreak
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                DreamGaming
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Gold
                                                Diamond
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Sexy
                                                baccarat
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                King855
                                              </label>
                                            </div>
                                            <div
                                              class="form-check
                                                                                        "
                                            >
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                BBN
                                              </label>
                                            </div>
                                            <div
                                              class="form-check
                                                                                        "
                                            >
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                BG
                                                Big
                                                gaming
                                              </label>
                                            </div>
                                            <div
                                              class="form-check
                                                                                        "
                                            >
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                AE
                                                Sexy
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="col-md-6
                                                                                ms-auto"
                                        >
                                          <div
                                            class="mt-4
                                                                                    mt-lg-0"
                                          >
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  SA
                                                  Gaming
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Fair
                                                  Guaranted
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  EVO
                                                  Casino
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  BG
                                                  Casino
                                                </label>
                                              </div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Paragmatic
                                                  Play
                                                  Live
                                                </label>
                                              </div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Miki
                                                  World
                                                </label>
                                              </div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Xtreme
                                                  Gaming
                                                </label>
                                              </div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  YeeBet
                                                </label>
                                              </div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  EBET
                                                </label>
                                              </div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  WM
                                                  Casino
                                                </label>
                                              </div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  OB
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <form>
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <div class="mb-3">
                                        <i class="ri-question-fill" />
                                        <label class="form-label">Max
                                          Win
                                          Limit</label>
                                        <span
                                          style="color:red;font-weight:bold"
                                        >500,000</span>
                                        <input
                                          id="progress-basicpill-lastname-input"
                                          type="text"
                                          class="form-control"
                                        >
                                      </div>
                                    </div>
                                    <div class="col-lg-6">
                                      <div class="mb-0">
                                        <i class="ri-question-fill" />
                                        <label class="form-label">Max
                                          Per
                                          Bet</label>
                                        <span
                                          style="color:red;font-weight:bold"
                                        >(Max:200,000)</span>
                                        <input
                                          id="progress-basicpill-lastname-input"
                                          type="text"
                                          class="form-control"
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Xtreme
                                  Gaming, AG,
                                  Dream Gaming,
                                  AllBet, Sexy
                                  Barcarrat, BG
                                  casino, Yeebot
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">Member
                                        Commission
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Xtreme
                                  Gaming, AG,
                                  Dream Gaming,
                                  AllBet, Sexy
                                  Barcarrat, BG
                                  casino, Yeebot
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  Tracking
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">My
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Downline
                                      Position
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Take
                                      up
                                      Remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  LuckyStreak,
                                  SA Gaming,
                                  GoldDiamond,
                                  King855, Fair
                                  Guaranted, EZUGI
                                  Casino,
                                  Pragmatic Play
                                  live
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">Member
                                        Commission
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  LuckyStreak,
                                  SA Gaming,
                                  GoldDiamond,
                                  King855, Fair
                                  Guaranted, EZUGI
                                  Casino,
                                  Pragmatic Play
                                  live
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  Tracking
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">My
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Downline
                                      Position
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Take
                                      up
                                      Remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  EVO
                                  Casino
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">Member
                                        Commission
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  EVO
                                  Casino
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  Tracking
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">My
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Downline
                                      Position
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Take
                                      up
                                      Remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Miki
                                  World, Cockfight
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">Member
                                        Commission
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Miki
                                  World, Cockfight
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  Tracking
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">My
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Downline
                                      Position
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Take
                                      up
                                      Remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>
                      </form>
                    </div>
                  </div>

                  <div id="progress-slot" class="tab-pane">
                    <div>
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Betting
                                  information
                                </h4>
                                <p class="card-title-desc">
                                  Slot
                                </p>
                                <div class="col-xl-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <h4
                                        class="card-title
                                                                            mb-4"
                                      >
                                        Setting
                                        Slot
                                        part
                                      </h4>
                                      <input
                                        id="switch4"
                                        type="checkbox"
                                        switch="bool"
                                        checked
                                      >
                                      <label
                                        for="switch4"
                                        data-on-label="Enable"
                                        data-off-label="Disable"
                                      />
                                      <div class="row">
                                        <div class="col-md-5">
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                PG SOFT
                                              </label>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                CQ9
                                              </label>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                Playtect
                                              </label>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                MG Plus
                                              </label>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                AG Gaming
                                              </label>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                OB
                                              </label>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                BBN
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="col-md-6
                                                                                ms-auto"
                                        >
                                          <div
                                            class="mt-4
                                                                                    mt-lg-0"
                                          >
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  JOKER
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="form-check">
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  GiocoPlus
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="form-check">
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  KA Gaming
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="form-check">
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  SimplePlay
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="form-check">
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  SEA Gaming
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="form-check">
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  TOP Player
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div class="form-check">
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  JDB
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <form>
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <div class="mb-3">
                                        <i class="ri-question-fill" />
                                        <label class="form-label">Max
                                          Win
                                          Limit</label>
                                        <span
                                          style="color:red;font-weight:bold"
                                        >500,000</span>
                                        <input
                                          id="progress-basicpill-lastname-input"
                                          type="text"
                                          class="form-control"
                                        >
                                      </div>
                                    </div>
                                    <div class="col-lg-6">
                                      <div class="mb-0">
                                        <i class="ri-question-fill" />
                                        <label class="form-label">Max
                                          Per
                                          Bet</label>
                                        <span
                                          style="color:red;font-weight:bold"
                                        >(Max:200,000)</span>
                                        <input
                                          id="progress-basicpill-lastname-input"
                                          type="text"
                                          class="form-control"
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Xtreme
                                  Gaming, AG,
                                  Dream Gaming,
                                  AllBet, Sexy
                                  Barcarrat, BG
                                  casino, Yeebot
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">Member
                                        Commission
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Xtreme
                                  Gaming, AG,
                                  Dream Gaming,
                                  AllBet, Sexy
                                  Barcarrat, BG
                                  casino, Yeebot
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  Tracking
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">My
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Downline
                                      Position
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Take
                                      up
                                      Remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  LuckyStreak,
                                  SA Gaming,
                                  GoldDiamond,
                                  King855, Fair
                                  Guaranted, EZUGI
                                  Casino,
                                  Pragmatic Play
                                  live
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">Member
                                        Commission
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  LuckyStreak,
                                  SA Gaming,
                                  GoldDiamond,
                                  King855, Fair
                                  Guaranted, EZUGI
                                  Casino,
                                  Pragmatic Play
                                  live
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  Tracking
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">My
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Downline
                                      Position
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Take
                                      up
                                      Remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  EVO
                                  Casino
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">Member
                                        Commission
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  EVO
                                  Casino
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  Tracking
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">My
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Downline
                                      Position
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Take
                                      up
                                      Remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Miki
                                  World, Cockfight
                                </h4>
                                <p class="card-title-desc">
                                  Commission
                                </p>
                                <form action="#">
                                  <div class="mb-3">
                                    <div class="mb-3">
                                      <label class="form-label">Member
                                        Commission
                                      </label><span
                                        style="color:red;font-weight:bold"
                                      >(0%)</span>
                                      <input
                                        id="demo1"
                                        type="text"
                                        value="55"
                                        name="demo1"
                                      >
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->

                          <div class="col-lg-6">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Miki
                                  World, Cockfight
                                </h4>
                                <p class="card-title-desc">
                                  Position
                                  Tracking
                                </p>
                                <form action="#">
                                  <div class="mb-4">
                                    <label class="form-label">My
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Downline
                                      Position
                                      Share</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                  <div class="mb-4">
                                    <label class="form-label">Take
                                      up
                                      Remaining</label><span
                                        style="color:red;font-weight:bold"
                                      >(0%-83%)</span>
                                    <input
                                      id="demo1"
                                      type="text"
                                      value="0"
                                      name="demo1"
                                    >
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> <!-- end col -->
                        </div>
                      </form>
                    </div>
                  </div>

                  <div id="progress-lottery" class="tab-pane">
                    <div>
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Betting
                                  information
                                </h4>
                                <p class="card-title-desc">
                                  Lottery
                                </p>
                                <div class="col-xl-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <h4
                                        class="card-title
                                                                            mb-4"
                                      >
                                        Setting
                                        Lottery
                                        part
                                      </h4>
                                      <input
                                        id="switch5"
                                        type="checkbox"
                                        switch="bool"
                                        checked
                                      >
                                      <label
                                        for="switch5"
                                        data-on-label="Enable"
                                        data-off-label="Disable"
                                      />
                                      <div class="row">
                                        <div class="col-md-5">
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                Keno
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Malaysia
                                                Lottery
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="col-md-6
                                                                                ms-auto"
                                        >
                                          <div
                                            class="mt-4
                                                                                    mt-lg-0"
                                          >
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  93
                                                  Connect
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Xoso
                                                  79
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Xtreme
                              Gaming, AG, Dream
                              Gaming, AllBet, Sexy
                              Barcarrat, BG
                              casino, Yeebot
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Xtreme
                              Gaming, AG, Dream
                              Gaming, AllBet, Sexy
                              Barcarrat, BG
                              casino, Yeebot
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              LuckyStreak,
                              SA Gaming,
                              GoldDiamond,
                              King855, Fair
                              Guaranted, EZUGI
                              Casino, Pragmatic
                              Play live
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              LuckyStreak,
                              SA Gaming,
                              GoldDiamond,
                              King855, Fair
                              Guaranted, EZUGI
                              Casino, Pragmatic
                              Play live
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              EVO
                              Casino
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              EVO
                              Casino
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Miki
                              World, Cockfight
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Miki
                              World, Cockfight
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>
                  </div>

                  <div id="progress-game" class="tab-pane">
                    <div>
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Betting
                                  information
                                </h4>
                                <p class="card-title-desc">
                                  Game
                                </p>
                                <div class="col-xl-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <h4
                                        class="card-title
                                                                            mb-4"
                                      >
                                        Setting
                                        Game
                                        part
                                      </h4>
                                      <input
                                        id="switch6"
                                        type="checkbox"
                                        switch="bool"
                                        checked
                                      >
                                      <label
                                        for="switch6"
                                        data-on-label="Enable"
                                        data-off-label="Disable"
                                      />
                                      <div class="row">
                                        <div class="col-md-5">
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                Sky
                                                Wind
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Pragmatic
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                CQ9
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Global
                                                Gaming
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Virtual
                                                Tech
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Simple
                                                Play
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Joker
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                PT
                                                Gaming
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Big
                                                Game
                                                Egame
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                BetSoft
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Dream
                                                Tech
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                Astro
                                                Tech
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                PG
                                                SOFT
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                AG
                                                Asia
                                                Gaming
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck2"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck2"
                                              >
                                                CQ9
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="col-md-6
                                                                                ms-auto"
                                        >
                                          <div
                                            class="mt-4
                                                                                    mt-lg-0"
                                          >
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  Habanero
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  918Kiss
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  King
                                                  Maker
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  BNG
                                                  GAME
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  YGGdrasil
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Genesis
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Play
                                                  N'
                                                  Go
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  JDB
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Micro
                                                  Gaming
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Relaxing
                                                  Gaming
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Dragon
                                                  Gaming
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Jili
                                                  Game
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  Mario
                                                </label>
                                              </div>
                                            </div>
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck2"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck2"
                                                >
                                                  BIG
                                                  Gaming
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              BNG
                              Games, Genesis, CQ9,
                              KingMaker, Habanero,
                              Astro Tech, Joker,
                              Dream Tech, Big Game
                              Egame, Simple play,
                              Global Gaming,
                              Pragmatic, BetSoft,
                              Relax Gaming, Dragon
                              Gaming, jill Game
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              BNG
                              Games, Genesis, CQ9,
                              KingMaker, Habanero,
                              Astro Tech, Joker,
                              Dream Tech, Big Game
                              Egame, Simple play,
                              Global Gaming,
                              Pragmatic, BetSoft,
                              Relax Gaming, Dragon
                              Gaming, jill Game
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Virtual
                              Tech
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Virtual
                              Tech
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              SkyWind,
                              YGGdrasil, Play
                              N'go, 918 Kiss, PT
                              Gaming, JDB,
                              Microgaming, Mario
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              SkyWind,
                              YGGdrasil, Play
                              N'go, 918 Kiss, PT
                              Gaming, JDB,
                              Microgaming, Mario
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              PG
                              Soft
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              PG
                              SOFT
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>
                  </div>

                  <div id="progress-poker" class="tab-pane">
                    <div>
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Betting
                                  information
                                </h4>
                                <p class="card-title-desc">
                                  Poker
                                </p>
                                <div class="col-xl-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <h4
                                        class="card-title
                                                                            mb-4"
                                      >
                                        Setting
                                        Poker
                                        part
                                      </h4>
                                      <input
                                        id="switch6"
                                        type="checkbox"
                                        switch="bool"
                                        checked
                                      >
                                      <label
                                        for="switch6"
                                        data-on-label="Enable"
                                        data-off-label="Disable"
                                      />
                                      <div class="row">
                                        <div class="col-md-5">
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                KY
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                BBN
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                OB
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="col-md-6
                                                                                ms-auto"
                                        >
                                          <div
                                            class="mt-4
                                                                                    mt-lg-0"
                                          >
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  MP
                                                </label>
                                              </div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  BG
                                                </label>
                                              </div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  King's Poker
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              BNG
                              Games, Genesis, CQ9,
                              KingMaker, Habanero,
                              Astro Tech, Joker,
                              Dream Tech, Big Game
                              Egame, Simple play,
                              Global Gaming,
                              Pragmatic, BetSoft,
                              Relax Gaming, Dragon
                              Gaming, jill Game
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              BNG
                              Games, Genesis, CQ9,
                              KingMaker, Habanero,
                              Astro Tech, Joker,
                              Dream Tech, Big Game
                              Egame, Simple play,
                              Global Gaming,
                              Pragmatic, BetSoft,
                              Relax Gaming, Dragon
                              Gaming, jill Game
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Virtual
                              Tech
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Virtual
                              Tech
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              SkyWind,
                              YGGdrasil, Play
                              N'go, 918 Kiss, PT
                              Gaming, JDB,
                              Microgaming, Mario
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              SkyWind,
                              YGGdrasil, Play
                              N'go, 918 Kiss, PT
                              Gaming, JDB,
                              Microgaming, Mario
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              PG
                              Soft
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              PG
                              SOFT
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>
                  </div>

                  <div id="progress-keno" class="tab-pane">
                    <div>
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Betting
                                  information
                                </h4>
                                <p class="card-title-desc">
                                  Keno
                                </p>
                                <div class="col-xl-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <h4
                                        class="card-title
                                                                            mb-4"
                                      >
                                        Setting
                                        Keno
                                        part
                                      </h4>
                                      <input
                                        id="switch6"
                                        type="checkbox"
                                        switch="bool"
                                        checked
                                      >
                                      <label
                                        for="switch6"
                                        data-on-label="Enable"
                                        data-off-label="Disable"
                                      />
                                      <div class="row">
                                        <div class="col-md-5">
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                LB-KENO
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                OB
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="col-md-6
                                                                                ms-auto"
                                        >
                                          <div
                                            class="mt-4
                                                                                    mt-lg-0"
                                          >
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  BBN
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              BNG
                              Games, Genesis, CQ9,
                              KingMaker, Habanero,
                              Astro Tech, Joker,
                              Dream Tech, Big Game
                              Egame, Simple play,
                              Global Gaming,
                              Pragmatic, BetSoft,
                              Relax Gaming, Dragon
                              Gaming, jill Game
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              BNG
                              Games, Genesis, CQ9,
                              KingMaker, Habanero,
                              Astro Tech, Joker,
                              Dream Tech, Big Game
                              Egame, Simple play,
                              Global Gaming,
                              Pragmatic, BetSoft,
                              Relax Gaming, Dragon
                              Gaming, jill Game
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Virtual
                              Tech
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Virtual
                              Tech
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              SkyWind,
                              YGGdrasil, Play
                              N'go, 918 Kiss, PT
                              Gaming, JDB,
                              Microgaming, Mario
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              SkyWind,
                              YGGdrasil, Play
                              N'go, 918 Kiss, PT
                              Gaming, JDB,
                              Microgaming, Mario
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              PG
                              Soft
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              PG
                              SOFT
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>
                  </div>

                  <div id="progress-Esport" class="tab-pane">
                    <div>
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">
                                  Betting
                                  information
                                </h4>
                                <p class="card-title-desc">
                                  Esport
                                </p>
                                <div class="col-xl-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <h4
                                        class="card-title
                                                                            mb-4"
                                      >
                                        Setting
                                        Esport
                                        part
                                      </h4>
                                      <input
                                        id="switch6"
                                        type="checkbox"
                                        switch="bool"
                                        checked
                                      >
                                      <label
                                        for="switch6"
                                        data-on-label="Enable"
                                        data-off-label="Disable"
                                      />
                                      <div class="row">
                                        <div class="col-md-5">
                                          <div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                TF Gaming
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input
                                                id="formCheck1"
                                                class="form-check-input"
                                                type="checkbox"
                                              >
                                              <label
                                                class="form-check-label"
                                                for="formCheck1"
                                              >
                                                OB
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="col-md-6
                                                                                ms-auto"
                                        >
                                          <div
                                            class="mt-4
                                                                                    mt-lg-0"
                                          >
                                            <div>
                                              <div
                                                class="form-check
                                                                                            "
                                              >
                                                <input
                                                  id="formCheck1"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                >
                                                <label
                                                  class="form-check-label"
                                                  for="formCheck1"
                                                >
                                                  IA E-sport
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              BNG
                              Games, Genesis, CQ9,
                              KingMaker, Habanero,
                              Astro Tech, Joker,
                              Dream Tech, Big Game
                              Egame, Simple play,
                              Global Gaming,
                              Pragmatic, BetSoft,
                              Relax Gaming, Dragon
                              Gaming, jill Game
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              BNG
                              Games, Genesis, CQ9,
                              KingMaker, Habanero,
                              Astro Tech, Joker,
                              Dream Tech, Big Game
                              Egame, Simple play,
                              Global Gaming,
                              Pragmatic, BetSoft,
                              Relax Gaming, Dragon
                              Gaming, jill Game
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Virtual
                              Tech
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              Virtual
                              Tech
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              SkyWind,
                              YGGdrasil, Play
                              N'go, 918 Kiss, PT
                              Gaming, JDB,
                              Microgaming, Mario
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              SkyWind,
                              YGGdrasil, Play
                              N'go, 918 Kiss, PT
                              Gaming, JDB,
                              Microgaming, Mario
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              PG
                              Soft
                            </h4>
                            <p class="card-title-desc">
                              Commission
                            </p>
                            <form action="#">
                              <div class="mb-3">
                                <div class="mb-3">
                                  <label class="form-label">Member
                                    Commission
                                  </label><span
                                    style="color:red;font-weight:bold"
                                  >(0%)</span>
                                  <input id="demo1" type="text" value="55" name="demo1">
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->

                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title">
                              PG
                              SOFT
                            </h4>
                            <p class="card-title-desc">
                              Position
                              Tracking
                            </p>

                            <form action="#">
                              <div class="mb-4">
                                <label class="form-label">My
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Downline
                                  Position
                                  Share</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                              <div class="mb-4">
                                <label class="form-label">Take
                                  up Remaining</label><span
                                    style="color:red;font-weight:bold"
                                  >(0%-83%)</span>
                                <input id="demo1" type="text" value="0" name="demo1">
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> <!-- end col -->
                    </div>
                  </div>

                  <div id="progress-confirm-detail" class="tab-pane">
                    <div class="row justify-content-center">
                      <div class="col-lg-6">
                        <div class="text-center">
                          <div class="mb-4">
                            <i
                              class="mdi
                                                        mdi-check-circle-outline
                                                        text-success display-4"
                            />
                          </div>
                          <div>
                            <h5>Confirm Detail</h5>
                            <p class="text-muted">
                              Please
                              recheck all detail
                              again. Click button to
                              confirm add new agent
                            </p>
                            <button
                              type="button"
                              class="btn btn-success
                                                        waves-effect
                                                        waves-light"
                            >
                              <i
                                class="ri-check-line
                                                            align-middle me-2"
                              />
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  class="pager wizard
                                twitter-bs-wizard-pager-link"
                >
                  <li class="previous">
                    <a
                      href="javascript:
                                        void(0);"
                    >Previous</a>
                  </li>
                  <li class="next">
                    <a href="javascript: void(0);">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div> <!-- container-fluid -->
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [
        {
          src: '/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/twitter-bootstrap-wizard/prettify.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/select2/js/select2.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/spectrum-colorpicker2/spectrum.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/admin-resources/bootstrap-filestyle/bootstrap-filestyle.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/bootstrap-maxlength/bootstrap-maxlength.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/js/pages/addnewagent.init.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        }
        // {
        //   src: '/js/ajax.js',
        //   async: true,
        //   defer: true,
        //   callback: () => { this.$forceUpdate() }
        // }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/libs/twitter-bootstrap-wizard/prettify.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/select2/css/select2.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/spectrum-colorpicker2/spectrum.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
