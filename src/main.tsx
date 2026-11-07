// Copyright 2026 ARMCNC, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Import modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import styles
import "@/assets/styles/base.css";
import "@/assets/styles/tailwind.css";

// Render the React application
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div className="w-full p-5 space-y-2">
            <p>感谢大家对ARMCNC开源数据系统的支持，全新官网即将开放，敬请期待。</p>
            <p className="text-sm text-muted-foreground">连云港东福智造科技有限公司</p>
        </div>
    </StrictMode>,
);
